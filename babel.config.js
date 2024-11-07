module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: 18,
        },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-optional-chaining",
    [
      "file-loader",
      {
        name: "[name].[ext]",
        extensions: ["ttf"],
        publicPath: "src/assets/fonts",
        outputPath: "../../dist/assets/fonts",
        context: "",
        limit: 0,
      },
      "fonts",
    ],
    [
      "file-loader",
      {
        name: "[name].[ext]",
        extensions: ["png", "jpg"],
        publicPath: "src/assets/images",
        outputPath: "../../dist/assets/images",
        context: "",
        limit: 0,
      },
      "images",
    ],
    [
      "module-resolver",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        root: ["."],
        alias: {
          "@": "./src",
        },
      },
    ],
  ],
};
