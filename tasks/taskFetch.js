var taskFetch = function (config) {
	var fetchConfig = config.fetchConfig;
	var gulp = config.gulp;
	var dest = gulp.dest;
	var src = gulp.src;
	return function (cb) {
		for (var fetchFrom in fetchConfig) {
			if (fetchConfig.hasOwnProperty(fetchFrom) && fetchConfig[fetchFrom]) {
				src(fetchFrom).pipe(dest(fetchConfig[fetchFrom]));
			}
		}
		return cb();
	};
};

module.exports = taskFetch;
