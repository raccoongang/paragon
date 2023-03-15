require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const rehypeSlugPlugin = require('rehype-slug');
const rehypeAutolinkHeadingsPlugin = require('rehype-autolink-headings');
const vs = require('unist-util-visit');

/** @type {import('unified').Plugin<Array<void>, import('hast').Root>} */
function rehypeMetaAsAttributes() {
  const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g
  return (tree) => {
    vs(tree, 'element', (node) => {
      let match
      if (node.tagName === 'code' && node.data && node.data.meta) {
        re.lastIndex = 0 // Reset regex.

        while ((match = re.exec(node.data.meta))) {
          node.properties[match[1]] = match[2] || match[3] || match[4] || ''
        }
      }

    })
  }
}

const segmentPlugin = {
  resolve: 'gatsby-plugin-segment-js',
  options: {
    prodKey: process.env && process.env.SEGMENT_KEY,
    devKey: process.env && process.env.SEGMENT_KEY,
    trackPage: true,
    trackPageDelay: 100,
  },
};

const axePlugin = {
  resolve: 'gatsby-plugin-react-axe',
  options: {
    debounce: 1000,
    showInProduction: false,
  },
};

const plugins = [
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      cssLoaderOptions: {
        modules: {
          namedExport: false,
        },
      },
    },
  },
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      start_url: '/',
      icon: 'src/images/paragon-icon.png', // This path is relative to the root of the site.
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/../src`,
      name: 'components',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/../CHANGELOG.md`,
      name: 'changelog',
    },
  },
  // Note this will throw a warning about conflicting field types during build, but it is O.K.
  // https://github.com/gatsbyjs/gatsby/issues/7027
  'gatsby-transformer-react-docgen',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: ['.mdx', '.md'],
      mdxOptions: {
        rehypePlugins: [
          rehypeMetaAsAttributes,
          rehypeSlugPlugin,
          [
            rehypeAutolinkHeadingsPlugin,
            {
              behavior: 'append',
              content: {
                type: 'element',
                tagName: 'span',
                properties: {
                  className: 'pgn-doc__anchor',
                },
                children: [
                  { type: 'text', value: '#' },
                ],
              },
            },
          ],
        ],
      },
    },
  },
  {
    resolve: 'gatsby-plugin-page-creator',
    options: {
      path: `${__dirname}/src/pages`,
      ignore: ['insights.tsx', '*.mdx'],
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/pages`,
    },
  },
];

if (process.env && process.env.SEGMENT_KEY) {
  plugins.push(segmentPlugin);
}

if (process.env && process.env.FEATURE_ENABLE_AXE) {
  plugins.push(axePlugin);
}

module.exports = {
  siteMetadata: {
    title: 'Paragon Design System',
    description: 'Technical documentation for the Paragon Design System.',
    author: '@edx',
  },
  // Match the location of the site on github pages if no path prefix is specified
  pathPrefix: 'PATH_PREFIX' in process.env ? process.env.PATH_PREFIX : '/paragon',
  plugins,
};
