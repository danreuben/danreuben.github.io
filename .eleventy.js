const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);  
  eleventyConfig.addPassthroughCopy("_src/css");
  eleventyConfig.addPassthroughCopy("_src/img");
  eleventyConfig.addPassthroughCopy("_src/js");
  eleventyConfig.addPassthroughCopy('_src/robots.txt');    

  return {
      dir: {
        input: '_src',
        output: '_site'
      }
    };
};