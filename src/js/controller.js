define([
	"jquery",
	"view",
	"models/screen",
	"models/user",
	"utils/type",
	"API"
], function ($, view, screenModel, userModel, type, API) {
	"use strict";
	view._$id.on("keyup keydown change", function () {
		userModel.id.set(view._$id.value());
		userModel.update();
	});
	view._$password.on("keyup keydown change", function () {
		userModel.password.set(view._$password.value());
		userModel.update();
	});
	view._$loginForm.on("submit", function (e) {
		e.preventDefault();
		screenModel.loading.set(true);
		API.submitLogin(userModel.id.get(), userModel.password.get(), function (
			response
		) {
			screenModel.loading.set(false);
			response.status === 200
				? view._$main(response.message)
				: view._$dashboard(response.message);
		});
	});
	screenModel.on(screenModel.update.key, function () {
		var off = !screenModel.loading.get();
		view.loading(off);
		view._$id.enable(off);
		view._$password.enable(off);
		view._$submit.enable(off);
		view._$loginForm.enable(off);
	});
	userModel.on(userModel.update.key, function () {
		view._$dashboard(
			"id:" + userModel.id.get() + " / password:" + userModel.password.get()
		);
	});
	userModel.update();
	screenModel.update();
	return;
});
