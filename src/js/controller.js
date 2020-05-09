define(["jquery", "view", "model", "API"], function ($, view, model, API) {
	"use strict";
	return $(function () {
		view._$main.on("keyup keydown change", view._$id.selector, function () {
			model.setId(view._$id.val());
		});
		view._$main.on(
			"keyup keydown change",
			view._$password.selector,
			function () {
				model.setPassword(view._$password.val());
			}
		);
		view._$main.on("click", view._$submit, function (e) {
			view._$main.append(view.spinner.spin().el);
			API.submitLogin(model.getId(), model.getPassword(), view.spinner.stop);
		});
	});
});
