const express = require("express");
const controller = require("../controller/userController");
// 创建路由
const userRouter = express.Router();

userRouter
	// -----------
	.get("/login", controller.renderLogin)
	.post("/login", controller.login)
	.get("/logout", controller.logout);
// 暴露出router，进行交互数据
module.exports = userRouter;
