define(["jquery", "spin"], function ($, Spin) {
	"use strict";
	var viewTargets = {
		_$main: "_$main",
		_$id: "_$id",
		_$password: "_$password",
		_$submit: "_$submit",
		_$loginBox: "_$loginBox"
	};
	var FROM = /(:|\.|\[|\]|,|=|@|\$)/g;
	var TO = "\\$1";
	for (var keyName in viewTargets) {
		var renamed = keyName.replace(FROM, TO);
		viewTargets[keyName] = $("#" + renamed + ", ." + renamed);
	}
	viewTargets.spinner = new Spin();
	console.log(viewTargets);
	return viewTargets;
});
