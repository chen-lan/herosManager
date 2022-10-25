const fs = require("fs");
const path = require("path");
const arr = require("../heros.json");
function del(req, res) {
	// 获取传过来的id参数
	const { id } = req.query;
	// 将id转化为number类型
	const numId = Number(id);
	// 将值为id值的那一项出数组中删除
	const newArr = arr.filter(item => item.id !== numId);
	//将newArr写进hero.json数据中
	fs.writeFile(path.join(__dirname, "../heros.json"), JSON.stringify(newArr, null, " "), "utf-8", err => {
		if (err) {
			console.log(`删除英雄失败：${err.message}`);
			return false;
		}
	});
	return newArr;
}

module.exports = del;
