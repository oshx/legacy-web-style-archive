define(function () {
	"use strict";
	return {
		is: function (value) {
			return typeof value === typeof undefined;
		},
		safeCall: function (cb) {
			return cb instanceof Function ? cb() : undefined;
		}
	};
});
