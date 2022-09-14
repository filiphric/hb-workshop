import * as webpack from "@cypress/webpack-preprocessor";
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

export const cucumberPreprocessorConfig = async (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  on("file:preprocessor", webpack({
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js"],
        plugins: [new TsconfigPathsPlugin()]
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: [/node_modules/, /trelloapp/],
            use: [
              {
                loader: "ts-loader",
                options: {
                  transpileOnly: true
                }
              },
            ],
          },
          {
            test: /\.feature$/,
            use: [
              {
                loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                options: config,
              },
            ],
          },
        ],
      },
    },
  })
  );
}
