var taskFetch = function (lib) {
	return function (cb) {
		for (var libKey in lib.fetchConfig) {
			if (lib.fetchConfig.hasOwnProperty(libKey) && lib.fetchConfig[libKey]) {
				lib.gulp.src(libKey).pipe(lib.gulp.dest(lib.fetchConfig[libKey]));
			}
		}
		return cb();
	};
};

module.exports = taskFetch;
