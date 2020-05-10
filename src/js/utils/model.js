define(["jquery", "utils/type"], function ($, type) {
	"use strict";

	var _UPDATE = "update";

	var _set = function ($model) {
		return function (key, value) {
			return ($model.get(0)[key] = value);
		};
	};

	var _get = function ($model) {
		return function (key) {
			return $model.get(0)[key];
		};
	};

	var _toHandler = function (key, $model) {
		return function (_, value, cb) {
			if (!type.is(value)) {
				return _get($model)(key);
			}
			_set($model)(key, value);
			return type.safeCall(cb);
		};
	};

	var _setProperty = function (key, $model) {
		return {
			set: function (value, cb) {
				$model.get(0)[key] = value;
				type.safeCall(cb);
				$model.trigger(_UPDATE, $model.get(0));
				return $model;
			},
			get: function (cb) {
				type.safeCall(cb);
				return _get($model)(key);
			}
		};
	};

	return function (model) {
		var eventMap = {};
		var $model = $(model);

		for (var key in model) {
			eventMap[key] = _toHandler(key, $model);
			$model[key] = _setProperty(key, $model);
		}
		$model[_UPDATE] = function () {
			$model.trigger(_UPDATE, $model.get(0));
			return $model;
		};
		$model.update.key = _UPDATE;
		return $model.on(eventMap);
	};
});
