const user = require("../user.json");

function login(req, res) {
	// 获取传过来的用户名和密码
	const { userName, password } = req.body;
	// 判断用户名和密码是否正确
	if (userName === "admin" && password === "123456") {
		// 存储用户信息在session中
		req.session.user = req.body;
		req.session.isLogin = true;
		return true;
	}
	return false;
}

module.exports = login;
