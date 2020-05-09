var tasks = function (lib) {
	var gulp = lib.gulp;

	gulp.task("clean", require("./taskClean")(lib));
	gulp.task("build", require("./taskBuild")(lib));
	gulp.task("fetch", require("./taskFetch")(lib));
	gulp.task("watch", require("./taskWatch")(lib));

	return gulp.task("default", gulp.series("clean", "fetch", "build"));
};

module.exports = tasks;
