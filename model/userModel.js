// 引入对象
const connect = require("./db");

module.exports = {
	// 登录业务处理
	toLogin(userName, password, callBack) {
		let sql = `select * from user where userName=? and password=?`;
		connect.query(sql, [userName, password], err => callBack(err));
	},
};
