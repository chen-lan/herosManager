const arr = require("../heros.json");
function select(req, res) {
	// 获取传过来的参数
	const { id } = req.query;
	// 筛选出符合id值的英雄数据
	const hero = arr.filter(item => item.id === Number(id));
	return hero;
}

module.exports = select;
