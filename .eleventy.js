const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
    const input = "src";
    const output = "public";

    eleventyConfig.addPassthroughCopy(`./${input}/assets`);
    eleventyConfig.addPassthroughCopy(`./${input}/admin`);
    eleventyConfig.addFilter("articleDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // Return all the tags used in a collection
    eleventyConfig.addFilter("getAllTags", collection => {
        let tagSet = new Set();
        for (let item of collection) {
            (item.data.tags || []).forEach(tag => tagSet.add(tag));
        }
        return Array.from(tagSet);
    });

    eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
        return (tags || []).filter(tag => ["all", "articles"].indexOf(tag) === -1);
    });

    // Where public facing files will be located and where I'm working from
    return {
        dir: {
            input,
            output
        }
    };

};