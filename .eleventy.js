const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy({'_src/robots.txt': '/robots.txt' });
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    return {
        dir: {
          input: '_src',
          output: '_site'
        }
      };
};