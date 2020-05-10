(function (r) {
	"use strict";
	r.config({
		baseUrl: "./js/",
		paths: {
			jquery: [
				"../lib/jquery.min",
				"https://code.jquery.com/jquery-1.12.4.min",
				"https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min"
			],
			spin: [
				"../lib/spin.min",
				"https://cdnjs.cloudflare.com/ajax/libs/spin.js/2.3.2/spin.min"
			]
		}
	});
	return r(["controller"]);
})(require);
