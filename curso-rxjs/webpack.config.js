const path = require("path");
module.exports = {
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
};
