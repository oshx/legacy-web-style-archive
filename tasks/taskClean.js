var taskClean = function (lib) {
	return function () {
		return require("del")(lib.cleanConfig);
	};
};

module.exports = taskClean;
