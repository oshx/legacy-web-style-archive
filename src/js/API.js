define(function () {
	var MockAPI = {
		submitLogin: function (id, password, callback) {
			console.log(id, password, callback);
			return setTimeout(callback, 3000);
		}
	};
	return MockAPI;
});
