function logout(req, res) {
	req.session.destroy(err => {
		if (err) throw err;
		console.log("用户退出成功！");
		res.redirect("/login");
	});
}

module.exports = logout;
