define(["jquery", "view", "model", "API"], function ($, view, model, API) {
	"use strict";
	return $(function () {
		view._$main.on(
			"keyup keydown change",
			view._$id.selector,
			function _changeId() {
				model.setId(view._$id.val());
			}
		);
		view._$main.on(
			"keyup keydown change",
			view._$password.selector,
			function _changePassword() {
				model.setPassword(view._$password.val());
			}
		);
		view._$main.on("click", view._$submit, function _clickSubmit(e) {
			view._$main.append(view.spinner.spin().el);
			API.submitLogin(model.getId(), model.getPassword(), view.spinner.stop);
		});
	});
});
