var taskBuild = function (lib) {
	return function () {
		console.debug("files are changed.");
		return lib.gulp
			.src(lib.buildConfig.source)
			.pipe(lib.gulp.dest(lib.buildConfig.target));
	};
};

module.exports = taskBuild;
