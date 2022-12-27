/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const sass = require('sass');
const css = require('css');

const fs = require('fs');
const { INSIGHTS_PAGES } = require('./src/config');
const { getThemesSCSSVariables, processComponentSCSSVariables } = require('./theme-utils');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'node_modules')],
      alias: {
        '~paragon-react': path.resolve(__dirname, '../src'),
        '~paragon-style': path.resolve(__dirname, '../scss'),
        '~paragon-icons': path.resolve(__dirname, '../icons'),
        // Prevent multiple copies of react getting loaded
        // paragon react components would naturally import
        // react and react-dom from the node_modules folder
        // one level above if it is present. This approach forces
        // all uses of react and react-dom to resolve to those
        // in ./node_modules
        react: path.resolve(__dirname, 'node_modules/react/'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom/'),
        'react-intl': path.resolve(__dirname, 'node_modules/react-intl/'),
      },
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
      .split('README')[0]
      .toLowerCase();

    const isChangelogNode = node.fileAbsolutePath && node.fileAbsolutePath.endsWith('CHANGELOG.md');

    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with 'components' prefix. you
      // don't need a separating '/' before the value because
      // createFilePath returns a path with the leading '/'.
      value: isChangelogNode ? 'changelog' : `/components${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  // MDX transforms markdown generated by gatsby-transformer-react-docgen
  // This query filters out all of those markdown nodes and assumes all others
  // are for page creation purposes.
  const result = await graphql(`
    query {
      allMdx(
        filter: {
          parent: {
            internal: { owner: { nin: "gatsby-transformer-react-docgen" } }
          }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              components
            }
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading createPages query');
  }
  // Create component detail pages.
  const components = result.data.allMdx.edges;

  const themesSCSSVariables = await getThemesSCSSVariables();

  // you'll call `createPage` for each result
  // eslint-disable-next-line no-restricted-syntax
  for (const { node } of components) {
    const componentDir = node.slug.split('/')[0];
    const variablesPath = path.resolve(__dirname, `../src/${componentDir}/_variables.scss`);
    let scssVariablesData = {};

    if (fs.existsSync(variablesPath)) {
      // eslint-disable-next-line no-await-in-loop
      scssVariablesData = await processComponentSCSSVariables(variablesPath, themesSCSSVariables);
    }

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve('./src/templates/component-page-template.tsx'),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, components: node.frontmatter.components || [], scssVariablesData },
    });
  }

  INSIGHTS_PAGES.forEach(({ path: pagePath, tab }) => {
    createPage({
      path: pagePath,
      component: require.resolve('./src/pages/insights.tsx'),
      context: { tab },
    });
  });
};

function createCssUtilityClassNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const { createNode } = actions;

  // We convert to CSS first since we prefer the real values over tokens.
  const compiledCSS = sass
    .renderSync({
      file: path.resolve(__dirname, '../scss/core/utilities-only.scss'),
      // Resolve tildes the way webpack would in our base npm project
      importer(url) {
        let resolvedUrl = url;
        if (url[0] === '~') {
          resolvedUrl = path.resolve(__dirname, '../node_modules', url.substr(1));
        }
        return { file: resolvedUrl };
      },
    })
    .css.toString();

  const sheet = css.parse(compiledCSS).stylesheet;

  sheet.rules.forEach(({ selectors, position, declarations }) => {
    if (!selectors) { return; }

    selectors.forEach(selector => {
      if (selector[0] !== '.') { return; } // classes only

      const classSelector = selector.substr(1);

      const nodeData = {
        selector: classSelector,
        declarations: declarations.map(
          ({ property, value }) => `${property}: ${value};`,
        ),
        isUtility:
          declarations.length === 1
          && declarations[0].value.includes('!important'),
      };

      const nodeMeta = {
        id: createNodeId(
          `rule-${classSelector}-${position.start.line}-${position.end.line}`,
        ),
        parent: null,
        children: [],
        internal: {
          type: 'CssUtilityClasses',
          contentDigest: createContentDigest(nodeData),
        },
      };

      const node = { ...nodeData, ...nodeMeta };
      createNode(node);
    });
  });
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  createCssUtilityClassNodes({ actions, createNodeId, createContentDigest });
};
