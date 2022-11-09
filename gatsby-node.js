// const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const fs = require('fs');
const path = require('path');
const os = require('os');

let didRunAlready = false;

exports.onPreInit = () => {
  if (didRunAlready) {
    throw new Error(
      `You can only have a single instance of gatsby-plugin-material-ui in your gatsby-config.js`,
    );
  }

  didRunAlready = true;
};

try {
  require.resolve(`babel-plugin-styled-components`);
} catch (e) {
  throw new Error(
    `'babel-plugin-styled-components' is not installed which is needed by plugin 'gatsby-plugin-styled-components'`,
  );
}

exports.onCreateBabelConfig = ({ stage, actions }, pluginOptions) => {
  const ssr = stage === `build-html` || stage === `build-javascript`;

  actions.setBabelPlugin({
    name: `babel-plugin-styled-components`,
    stage,
    options: { ...pluginOptions, ssr },
  });
};

// Copy and past from https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-typography
exports.onPreBootstrap = ({ store }, pluginOptions) => {
  const { program } = store.getState();

  let module;
  if (pluginOptions.pathToStylesProvider) {
    module = `module.exports = require("${
      path.isAbsolute(pluginOptions.pathToStylesProvider)
        ? pluginOptions.pathToStylesProvider
        : path.join(program.directory, pluginOptions.pathToStylesProvider)
    }")`;
    if (os.platform() === `win32`) {
      module = module.split(`\\`).join(`\\\\`);
    }
  } else {
    module = null;
  }

  const dir = `${__dirname}/.cache`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFileSync(`${dir}/styles-provider-props.js`, module);
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const { id } = edge.node;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    // // Tag pages:
    // let tags = [];
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags);
    //   }
    // });
    // // Eliminate duplicate tags
    // tags = _.uniq(tags);
    //
    // // Make tag pages
    // return tags.forEach(tag => {
    //   const tagPath = `/tags/${_.kebabCase(tag)}/`;
    //
    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/tags.js`),
    //     context: {
    //       tag,
    //     },
    //   });
    // });
    return null;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
