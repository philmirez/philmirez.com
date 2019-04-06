/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const webpackConfig = {
    resolve: {
      alias: {
        molecules: path.resolve(__dirname, "src", "components", "molecules"),
        atoms: path.resolve(__dirname, "src", "components", "atoms"),
        layout: path.resolve(__dirname, "src", "components", "layout"),
        core: path.resolve(__dirname, "src", "components")
      }
    }
  };

  actions.setWebpackConfig(webpackConfig);
};
