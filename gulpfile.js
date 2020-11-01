const gulp = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	cleanCSS = require("gulp-clean-css"),
	sass = require("gulp-sass");

gulp.task("build", gulp.series("compile-css"));

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
		.pipe(gulp.dest("dist" + "/css"));
});

gulp.task("serve", () => gulp.watch(["scss/*.scss"], { ignoreInitial: false }, gulp.series("compile-css")));
