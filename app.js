const express = require("express");
const herosRouter = require("./router/herosRouter");
const userRouter = require("./router/userRouter");
const path = require("path");
const session = require("express-session");
const { connect } = require("http2");

// 创建服务器对象
const app = express();

// 开启服务器并监听3000端口
app.listen(3000, () => {
	console.log("server is running at http://127.0.0.1:3000 / http://192.168.21.43:3000");
});
// 设置ejs中间件的模板引擎
app.set("view engine", "ejs");
// 配置模板的存放目录,因此的用ejs语法渲染页面
app.set("views", "./views");
// 注册静态文件中间件
// app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use("/node_modules", express.static("node_modules"));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

// 获取post参数，必须先注册一个中间件 来设置一下编码
app.use(express.urlencoded({ extended: true }));
// 注册express-session中间件
app.use(
	session({
		name: connect.sid,
		secret: "chenanlan secret key",
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			maxAge: 1000 * 3000,
		},
	})
);
// 设置中间件，进行拦截未登录页面
app.use((req, res, next) => {
	if (req.path === "/login" || req.path === "/register" || req.path === "/register.ejs" || req.session.isLogin) {
		next();
	} else {
		res.redirect("/login");
	}
});
// 注册路由中间件
app.use(herosRouter);
app.use(userRouter);
