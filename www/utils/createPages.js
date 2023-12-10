const path = require('path');
const fs = require('fs');
const { getThemesSCSSVariables, processComponentSCSSVariables } = require('../theme-utils');
const { INSIGHTS_PAGES } = require('../src/config');
const componentsUsage = require('../src/utils/componentsUsage');
const { createTabsData } = require('./tabs-utils');

async function createPages(graphql, actions, reporter) {
  // Destructure the createPage function from the actions object
  const { createPage, createRedirect } = actions;
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
              tabName
            }
            slug
            fileAbsolutePath
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
    const variablesPath = path.resolve(__dirname, `../../src/${componentDir}/_variables.scss`);
    const componentPath = path.resolve(__dirname, `../../src/${componentDir}`);
    const githubEditPath = `https://github.com/openedx/paragon/edit/master/src${node.fileAbsolutePath.split('src')[1]}`;
    let scssVariablesData = {};
    let componentTabsData = {};

    if (fs.existsSync(variablesPath)) {
      // eslint-disable-next-line no-await-in-loop
      scssVariablesData = await processComponentSCSSVariables(variablesPath, themesSCSSVariables);
    }

    const subcomponent = node.slug.split('/').slice(1).join('/');
    const [mainComponent, subComponent] = subcomponent.split('/');

    if (fs.existsSync(componentPath)) {
      // eslint-disable-next-line no-await-in-loop
      componentTabsData = await createTabsData(componentPath, componentDir);
    }

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(__dirname, '../src/templates/component-page-template.tsx'),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        components: node.frontmatter.components || [],
        scssVariablesData,
        componentsUsageInsights: Object.keys(componentsUsage),
        githubEditPath,
        componentUrl: node.fields.slug,
        subComponentName: mainComponent,
        tabName: node.frontmatter.tabName,
        markdownFiles: componentTabsData || [],
      },
    });
  }

  INSIGHTS_PAGES.forEach(({ path: pagePath, tab }) => {
    const githubEditPath = 'https://github.com/openedx/paragon/edit/master/www/src/pages/insights.tsx';
    createPage({
      path: pagePath,
      component: require.resolve('../src/pages/insights.tsx'),
      context: { tab, githubEditPath },
    });
  });

  createRedirect({
    fromPath: '/playroom',
    toPath: '/playroom/index.html',
  });

  createRedirect({
    fromPath: '/playroom/preview',
    toPath: '/playroom/preview/index.html',
  });
}

module.exports = createPages;
