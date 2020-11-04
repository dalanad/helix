module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./dist");
	return {
		htmlTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: "docs",
			output: "_site",
		},
	};
};
