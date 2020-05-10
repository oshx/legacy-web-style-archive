var tasks = function (config) {
	var gulp = config.gulp;
	var task = gulp.task;
	var series = gulp.series;

	task("clean", require("./taskClean")(config));
	task("build", require("./taskBuild")(config));
	task("minify", require("./taskMinify")(config));
	task("fetch", require("./taskFetch")(config));
	task("watch", require("./taskWatch")(config));

	return task("default", series("clean", "fetch", "build", "minify"));
};

module.exports = tasks;
