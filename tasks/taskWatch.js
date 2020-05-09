var taskFetch = function (lib) {
	return function (cb) {
		for (var libKey in lib.fetchConfig.library) {
			if (lib.fetchConfig.hasOwnProperty(libKey) && lib.fetchConfig[libKey]) {
				lib.gulp.src(libKey).pipe(lib.gulp.dest(lib.fetchConfig[libKey]));
			}
		}
		return cb();
	};
};

var taskWatch = function (lib) {
	return function () {
		return require("gulp-watch")(
			lib.buildConfig.source,
			lib.gulp.series("build")
		);
	};
};

module.exports = taskWatch;
