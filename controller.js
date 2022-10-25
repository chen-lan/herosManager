const heros = require("./heros.json");
const add = require("./model/add");
const select = require("./model/select");
const edit = require("./model/edit");
const del = require("./model/del");
const login = require("./model/login");
const logout = require("./model/logout");
module.exports = {
	// 渲染主页面
	renderIndex(req, res) {
		res.render("index", { heros });
	},
	// 渲染添加页面
	renderAdd(req, res) {
		res.render("add", {});
	},
	// 添加一个英雄
	addOneHero(req, res) {
		//调用中间件
		const isAdd = add(req, res);
		if (isAdd) {
			res.redirect("/");
		} else {
			res.send(`添加英雄数据失败,请检查`);
		}
	},
	// 渲染查询页面
	renderInfo(req, res) {
		const hero = select(req, res);
		res.render("info", { hero });
	},
	// 渲染修改英雄信息
	renderUpdateHero(req, res) {
		const hero = select(req, res);
		res.render("edit", { hero });
	},
	// 修改英雄信息
	updateHero(req, res) {
		const isEdit = edit(req, res);
		if (isEdit) {
			res.redirect("/");
		} else {
			res.send("修改英雄数据失败，请检查控制台错误日志信息");
		}
	},
	// 删除英雄
	delOneHero(req, res) {
		const heros = del(req, res);
		if (heros) {
			// res.redirect("/");
			res.render("index", { heros });
		} else {
			res.send("删除英雄信息失败，请检查控制台错误日志信息");
		}
	},
	// 渲染登录页面
	renderLogin(req, res) {
		res.render("login", {});
	},
	// 登录业务
	login(req, res) {
		login(req, res);
		if (req.session.isLogin) {
			res.redirect("/");
		} else {
			res.redirect("/login");
		}
	},
	// 退出登录
	logout(req, res) {
		logout(req, res);
	},
};
