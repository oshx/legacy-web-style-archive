var taskClean = function (config) {
	var clean = config.cleanConfig;
	return function () {
		return require("del")(clean);
	};
};

module.exports = taskClean;
