const userController = require("../model/userModel");

module.exports = {
	// 渲染登录页面
	renderLogin(req, res) {
		res.render("login", {});
	},
	// 登录业务
	login(req, res) {
		// 获取传过来的用户名和密码
		const { userName, password } = req.body;
		userController.toLogin(userName, password, (err, result) => {
			if (err || result == "") return res.send(`登录系统失败，请检查用户名或者密码，错误日志：${err}`);
			// 存储用户信息在session中
			req.session.user = req.body;
			req.session.isLogin = true;
			res.redirect("/");
		});
	},
	// 退出登录
	logout(req, res) {
		req.session.destroy(err => {
			if (err) throw err;
			console.log("用户退出成功！");
			res.redirect("/login");
		});
	},
	// 渲染注册页面
	register(req, res) {
		res.render("register", {});
	},
	// 注册英雄
	registerHero(req, res) {
		// 获取传过来的post数据对象
		const hero = req.body;
		userController.insertRegisterHero(hero, err => {
			if (err) return res.send(`英雄注册失败：${err.sqlMessage}`);
			res.redirect("/login");
		});
	},
};
