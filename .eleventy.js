const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy({"node_modules/concrete.css/concrete.css": "css/concrete.css"});
  eleventyConfig.addPassthroughCopy({"node_modules/normalize.css/normalize.css": "css/normalize.css"});
  eleventyConfig.addPassthroughCopy("_src/css");
  eleventyConfig.addPassthroughCopy("_src/img");
  eleventyConfig.addPassthroughCopy("_src/js");
  eleventyConfig.addPassthroughCopy("_src/robots.txt");    

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  
  return {
      dir: {
        input: '_src',
        output: '_site'
      }
    };
};