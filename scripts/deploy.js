var Git = require("simple-git");
var rimraf = require("rimraf");

var SSH_GIT_URL = process.env.npm_package_config_ssh;
var BRANCH = process.env.npm_package_config_branch;
var PATH = process.env.npm_package_config_path;
var REMOTE = process.env.npm_package_config_remote;

var MESSAGE = "[DEPLOYED] " + new Date();
console.log(
	{
		SSH_GIT_URL: SSH_GIT_URL,
		BRANCH: BRANCH,
		PATH: PATH,
		REMOTE: REMOTE
	},
	"\n",
	MESSAGE,
	"\n"
);

function info(logName) {
	return function () {
		var args = Array.prototype.slice.call(arguments);
		console.debug(
			"[",
			new Date(),
			":git",
			"]",
			logName,
			Array.isArray(args) && args.length && args[0] === null ? "✔" : args
		);
	};
}

rimraf(PATH + ".git", function () {
	Git(PATH)
		.init(false, info("init"))
		.raw(["checkout", "--orphan", BRANCH], info("checkout"))
		.addRemote(REMOTE, SSH_GIT_URL, info("addRemote"))
		.fetch(REMOTE, BRANCH, info("fetch"))
		.raw(["reset", "--mixed"], REMOTE + "/" + BRANCH, info("reset"))
		.add("*", info("add"))
		.commit(MESSAGE, info("commit"))
		.raw(
			["push", "--force", REMOTE, BRANCH],
			info("push @See [ " + process.env.npm_package_homepage + " ]")
		);
});
