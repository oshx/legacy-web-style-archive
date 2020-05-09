define(["jquery"], function ($) {
	"use strict";
	return (function ($model) {
		var eventMap = {};
		var modelInterface = {};
		var setter = null;
		var getter = null;
		for (var keyName in $model.get(0)) {
			if (!$model.get(0).hasOwnProperty(keyName)) {
				continue;
			}
			(keyName + "").replace(/(\w)(\w+)/g, function (all, m1, m2) {
				var key = m1.toUpperCase() + m2;
				setter = "set" + key;
				getter = "get" + key;
			});

			eventMap[setter] = function (event, value) {
				this[keyName] = value;
			};

			modelInterface[setter] = function (value) {
				console.debug({ setter, value });
				$model.trigger(setter, value);
				return true;
			};
			modelInterface[getter] = function () {
				return $model.get(0)[keyName];
			};
			console.debug(setter, modelInterface[setter]);
		}
		console.debug(eventMap, modelInterface);
		$model.on(eventMap);
		return modelInterface;
	})(
		$({
			id: null,
			password: null
		})
	);
});
