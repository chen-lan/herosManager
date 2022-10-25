const userArray = require("../user.json");

function login(req, res) {
	// 获取传过来的用户名和密码
	const { userName, password } = req.body;
	// 判断用户名和密码是否正确
	userArray.find(user => {
		if (user.userName === userName && user.password === password) {
			// 存储用户信息在session中
			req.session.user = req.body;
			req.session.isLogin = true;
		}
	});
}

module.exports = login;
