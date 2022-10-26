const mysql = require("mysql");

const connect = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "123456",
	database: "heros",
	dateStrings: true,
});
module.exports = connect;
