define(["jquery", "spin", "utils/type"], function ($, Spin, type) {
	"use strict";

	var FROM = /(:|\.|\[|\]|,|=|@|\$)/g;
	var TO = "\\$1";

	var toRenderrer = function ($target) {
		var renderrer = function (value) {
			$target.html(value);
			return;
		};
		renderrer.on = function (events, cb) {
			$target.on(events, cb);
		};
		renderrer.enable = function (off) {
			$target.prop("disabled", !off);
		};
		renderrer.show = function () {
			$target.clearQueue().stop().fadeIn();
		};
		renderrer.hide = function () {
			$target.clearQueue().stop().fadeout();
		};
		renderrer.error = function (on) {
			$target[on ? "addClass" : "removeClass"]("error");
		};
		renderrer.value = $target.val.bind($target);
		return renderrer;
	};

	return (function (viewTargets) {
		var outter = {};
		for (var i in viewTargets) {
			var keyName = viewTargets[i];
			var renamed = keyName.replace(FROM, TO);
			viewTargets[keyName] = $("." + renamed);
			outter[keyName] = toRenderrer(viewTargets[keyName]);
		}
		viewTargets.spinner = new Spin();

		outter.loading = function (off) {
			if (!off) {
				viewTargets._$main.append(viewTargets.spinner.spin().el);
				return;
			}
			viewTargets.spinner.stop();
		};

		return outter;
	})([
		"_$main",
		"_$id",
		"_$dashboard",
		"_$password",
		"_$submit",
		"_$loginForm"
	]);
});
