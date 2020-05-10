var fs = require("fs");
var gulp = require("gulp");
var log = require("fancy-log");
var packageJson = require("./package.json");

var config = {
	log: function () {
		var args = Array.prototype.slice.call(arguments);
		return function () {
			return log.apply(null, args);
		};
	},
	gulp: gulp,
	packageJson: packageJson,
	cleanConfig: "dist/*",
	buildConfig: {
		source: "src/**/*",
		uglify: ["dist/**/*.js", "!dist/**/*.min.js"],
		target: "dist"
	},
	fetchConfig: {
		"node_modules/requirejs/require.js": "dist/lib/require.js/2.3.6",
		"node_modules/jquery/dist/jquery.min.js": "dist/lib/jquery/1.12.4",
		"node_modules/spin.js/spin.min.js": "dist/lib/spin.js/2.3.2"
	}
};

require("./tasks")(config);
