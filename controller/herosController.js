const herosController = require("../model/herosModel");
const moment = require("moment");
module.exports = {
	// 渲染主页面
	renderIndex(req, res) {
		herosController.selectAllHeros((err, heros) => {
			if (err) return res.send(`查询所有英雄数据失败：${err.sqlMessage}`);
			res.render("index", { heros });
		});
	},
	// 渲染添加页面
	renderAdd(req, res) {
		res.render("add", {});
	},
	// 添加一个英雄
	addOneHero(req, res) {
		// 获取请求参数，并返回结果
		const query = req.query;
		query.date = moment().format("YYYY-MM-DD HH:mm:ss");
		herosController.insertOneHero(query, err => {
			if (err) return res.send(`添加英雄失败：${err.sqlMessage}`);
			res.redirect("/");
		});
	},
	// 渲染查询和修改页面
	renderInfo(req, res) {
		// 获取传过来的参数
		const { id } = req.query;
		herosController.selectOneHero(id, (err, hero) => {
			if (err) return res.send(`查询id为${id}英雄数据失败：${err.sqlMessage}`);
			res.render("info", ...hero);
		});
	},
	// 渲染修改英雄信息
	renderUpdateHero(req, res) {
		// 获取传过来的参数
		const { id } = req.query;
		herosController.selectOneHero(id, (err, hero) => {
			if (err) return res.send(`查询id为${id}英雄数据失败：${err.sqlMessage}`);
			res.render("edit", ...hero);
		});
	},
	// 修改英雄信息
	updateHero(req, res) {
		// 获取传过来的参数
		const { id } = req.query;
		// 获取传过来的post参数
		const postObj = req.body;
		postObj.date = moment().format("YYYY-MM-DD HH:mm:ss");
		herosController.updateOneHero(id, postObj, err => {
			if (err) return res.send(`修改英雄失败：${err.sqlMessage}`);
			res.redirect("/");
		});
	},
	// 删除英雄
	delOneHero(req, res) {
		// 获取传过来的id参数
		const { id } = req.query;
		herosController.delHero(id, err => {
			if (err) return res.send(`删除id为${id}的英雄数据失败：${err.sqlMessage}`);
			res.redirect("/");
		});
	},
};
