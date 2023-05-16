const tailwind = require("tailwindcss");
const postCss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const postcssFilter = (cssCode, done) => {
  postCss([
    tailwind(require("./tailwind.config")),
    autoprefixer(),
    cssnano({ preset: "default" }),
  ])
    .process(cssCode, {
      from: "./src/_includes/styles/layout.css",
    })
    .then(
      (r) => done(null, r.css),
      (e) => done(e, null)
    );
};

module.exports = function (config) {
  config.addWatchTarget("./src/_includes/styles/layout.css");
  config.addNunjucksAsyncFilter("postcss", postcssFilter);
};
