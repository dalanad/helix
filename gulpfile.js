const gulp = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	cleanCSS = require("gulp-clean-css"),
	sass = require("gulp-sass");

gulp.task("compile-css", function (params) {
	return gulp
		.src("./src/scss/helix.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(
			cleanCSS({
				level: 2,
				specialComments: false,
			})
		)
		.pipe(gulp.dest("dist"));
});

gulp.task("bundle-js", function () {
	return require("esbuild").build({
		entryPoints: ["./src/js/main.js"],
		bundle: true,
		outfile: "dist/main.js",
		format: "iife",
		minify: true,
		banner: "/*hlx components*/",
	});
});

gulp.task("build", gulp.series("compile-css", "bundle-js"));

gulp.task("watch-js", () => gulp.watch("./src/js/*.js", { ignoreInitial: false }, gulp.series("bundle-js")));
gulp.task("watch-css", () => gulp.watch("./src/scss/*.scss", { ignoreInitial: false }, gulp.series("compile-css")));

gulp.task("serve", gulp.parallel("watch-js", "watch-css"));
