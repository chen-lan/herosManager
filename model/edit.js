const moment = require("moment");
const arr = require("../heros.json");
const fs = require("fs");
const path = require("path");
function edit(req, res) {
	// 获取请求id，防止每次修改将会改变id值
	const { id } = req.query;
	// 处理id类型为Number，保持与hero.json格式一致
	const numId = Number(id);
	// 获取传过来的post参数
	const postObj = req.body;
	postObj.id = numId;
	let index;
	postObj.date = moment().format("YYYY-MM-DD HH:mm:ss");
	arr.forEach((item, i) => {
		if (item.id === numId) {
			index = i;
		}
	});
	// newarr.push(postObj);
	arr.splice(index, 1, postObj);
	// 修改数据成功写进hero.json数据中
	fs.writeFile(path.join(__dirname, "../heros.json"), JSON.stringify(arr, null, " "), "utf-8", err => {
		if (err) {
			console.log(`修改英雄信息失败：${err.message}`);
			return false;
		}
	});
	return true;
}

module.exports = edit;
