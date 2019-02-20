module.exports = {
	getUser: (req, res) => {
		res.json(req.session.user);
	}
};
