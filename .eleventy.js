const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    const input = "src";
    const output = "public";

    eleventyConfig.addPassthroughCopy(`./${input}/assets`);

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // First Page is 1: Retarded array in contrast with zero based.
    eleventyConfig.addNunjucksFilter("hashIt", function (array) {
        const hash = {};
        for (let i = 0; i < array.length; i++) {
            hash[i + 1] = array[i];
        }

        return hash;
    });



    // Where public facing files will be located and where I'm working from
    return {
        dir: {
            input,
            output
        }
    };

};