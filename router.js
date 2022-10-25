const express = require("express");
const { login } = require("./controller");
const controller = require("./controller");
// 创建路由
const router = express.Router();
// router
// 	.get("/", (req, res) => controller.renderIndex(req, res))
// 	.get("/add.ejs", (req, res) => controller.renderAdd(req, res))
// 	.get("/submit", (req, res) => controller.addOneHero(req, res))
// 	.get("/info.ejs", (req, res) => controller.renderInfo(req, res))
// 	.get("/edit.ejs", (req, res) => controller.renderUpdateHero(req, res))
// 	.post("/edit", (req, res) => controller.updateHero(req, res))
// 	.get("/del", (req, res) => controller.delOneHero(req, res));

router
	.get("/", controller.renderIndex)
	.get("/add.ejs", controller.renderAdd)
	.get("/submit", controller.addOneHero)
	.get("/info.ejs", controller.renderInfo)
	.get("/edit.ejs", controller.renderUpdateHero)
	.post("/edit", controller.updateHero)
	.get("/del", controller.delOneHero)
	.get("/login", controller.renderLogin)
	.post("/login", controller.login)
	.get("/logout", controller.logout);
// 暴露出router，进行交互数据
module.exports = router;
