define(function () {
	var TIMER = 1000;
	var currentJob = null;
	var MockAPI = {
		submitLogin: function (id, password, callback) {
			clearTimeout(currentJob);
			currentJob = setTimeout(function () {
				var correct = id === "test" && password === "test";
				return callback({
					message: correct
						? "test 님 안녕하세요."
						: "아이디 또는 비밀번호를 확인하세요.",
					status: correct ? 200 : 400
				});
			}, TIMER);
			return currentJob;
		}
	};
	return MockAPI;
});
