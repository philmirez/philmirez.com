/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const webpackConfig = {
    resolve: {
      alias: {
        buildingBlocks: path.resolve(__dirname, 'src', 'stagingComponents', 'buildingBlocks'),
        styles: path.resolve(__dirname, 'src', 'styles'),
        molecules: path.resolve(__dirname, 'src', 'components', 'molecules'),
        atoms: path.resolve(__dirname, 'src', 'components', 'atoms'),
        layout: path.resolve(__dirname, 'src', 'components', 'layout'),
        core: path.resolve(__dirname, 'src', 'components'),
        hooks: path.resolve(__dirname, 'src', 'hooks')
      },
    },
  };

  actions.setWebpackConfig(webpackConfig);
};

const standardBasePath = `/`

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  const basePath = themeOptions.basePath || standardBasePath

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/cara.tsx`),
  })
}
