const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    const input = "src";
    const output = "public";

    eleventyConfig.addPassthroughCopy(`./${input}/assets`);

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });



    // Where public facing files will be located and where I'm working from
    return {
        dir: {
            input,
            output
        }
    };

};