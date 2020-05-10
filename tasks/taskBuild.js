var taskBuild = function (config) {
	var source = config.buildConfig.source;
	var target = config.buildConfig.target;

	var gulp = config.gulp;
	var dest = gulp.dest;

	return function () {
		return gulp.src(source).pipe(dest(target));
	};
};

module.exports = taskBuild;
