module.exports = function (eleventyConfig) {
    const input = "src";
    const output = "public";

    eleventyConfig.addPassthroughCopy(`./${input}/assets`);


    // Where public facing files will be located and where I'm working from
    return {
        dir: {
            input,
            output
        }
    };

}