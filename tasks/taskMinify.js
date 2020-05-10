var taskMinify = function (config) {
	var target = config.buildConfig.target;
	var uglify = config.buildConfig.uglify;

	var gulp = config.gulp;
	var dest = gulp.dest;

	return function () {
		return gulp
			.src(uglify)
			.pipe(require("gulp-uglify")())
			.pipe(require("gulp-rename")({ suffix: ".min" }))
			.pipe(dest(target));
	};
};

module.exports = taskMinify;
