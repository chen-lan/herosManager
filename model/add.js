function add(req, res) {
	const arr = require("../heros.json");
	const moment = require("moment");
	const path = require("path");
	const fs = require("fs");
	// 获取请求参数，并返回结果
	const query = req.query;
	// 添加id
	id = Date.now();
	// 处理id类型为Number，保持与hero.json格式一致
	const numId = Number(id);
	query.id = numId;
	query.date = moment().format("YYYY-MM-DD HH:mm:ss");
	// 添加到获取英雄数据的arr数组中
	arr.push(query);
	// 写进heros.json数据中
	fs.writeFile(path.join(__dirname, "../heros.json"), JSON.stringify(arr, null, " "), "utf-8", err => {
		if (err) {
			console.log(`添加英雄数据失败：${err.message}`);
			return false;
		}
	});
	return true;
}

module.exports = add;
