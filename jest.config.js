module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "./assetsTransformer.js",
    "\\.(css|less)$": "./assetsTransformer.js",
  },
  setupFiles: ["raf/polyfill", "./enzyme.config.js"],
  collectCoverageFrom: ["src/**/*.js", "!src/assets/**/*.js"],
  testURL: "http://localhost/",
};