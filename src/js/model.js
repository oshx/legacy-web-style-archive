define(["jquery"], function ($) {
	"use strict";
	return (function ($model) {
		var eventMap = {};
		var modelInterface = {};
		var model = $model.get(0);
		for (var keyName in model) {
			if (!model.hasOwnProperty(keyName)) {
				continue;
			}
			var setter = null;
			var getter = null;

			(keyName + "").exec(/(\w)(\w+)/g, function (all, m1, m2) {
				var key = m1.toUpperCase() + m2;
				setter = "set" + key;
				getter = "get" + key;
			});

			eventMap[setter] = function _handler(event, value) {
				this[keyName] = value;
			};

			modelInterface[setter] = function _handler(value) {
				$model.trigger(setter, value);
				_handler.name = "setter" + setter;
				return true;
			};
			modelInterface[getter] = function _handler() {
				_handler.name = "getter" + setter;
				return $model.get(keyName);
			};
		}
		$model.on(eventMap);
		return modelInterface;
	})(
		$({
			id: null,
			password: null
		})
	);
});
