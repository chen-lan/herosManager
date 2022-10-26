// 引入连接对象
const connect = require("./db");

module.exports = {
	// 渲染主页面，查询主页面所有英雄的数据
	selectAllHeros(callBack) {
		let sql = `select * from heros`;
		connect.query(sql, (err, result) => {
			callBack(err, result);
		});
	},
	// 添加英雄信息
	insertOneHero(hero, callBack) {
		// ？号是占位符，这样可以直接传对象过来插入一条数据库
		let sql = `insert into heros set ?`;
		connect.query(sql, hero, err => callBack(err));
	},
	// 渲染查询和修改页面信息,也就是根据id查询该英雄数据
	selectOneHero(id, callBack) {
		let sql = `select * from heros where id=?`;
		connect.query(sql, id, (err, result) => callBack(err, result));
	},
	// 修改英雄信息，也就是根据id修改英雄信息
	updateOneHero(id, hero, callBack) {
		let sql = `update heros set ? where id=? `;
		connect.query(sql, [hero, id], err => callBack(err));
	},
	// 根据id值删除英雄
	delHero(id, callBack) {
		let sql = `delete from heros where id=?`;
		connect.query(sql, id, err => callBack(err));
	},
};
