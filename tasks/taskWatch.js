var taskWatch = function (config) {
	var source = config.buildConfig.source;
	var series = config.gulp.series;
	return function () {
		return require("gulp-watch")(source, series("build"));
	};
};

module.exports = taskWatch;
