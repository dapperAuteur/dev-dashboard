module.exports = {
	getCouches: (req, res) => {
		req.app
			.get("db")
			.get_couches()
			.then(couches => {
				res.json(couches);
			})
			.catch(error => {
				console.log("error in getCouches", error);
				res.status(500).json({ message: "blah blah" });
			});
	},
	postCouch: (req, res) => {
		req.app
			.get("db")
			.create_couch({
				user_id: req.session.user_id,
				...req.body
			})
			.then(couches => {
				res.json(couches[0]);
			})
			.catch(error => {
				console.log("error in getCouches", error);
				res.status(500).json({ message: "blah blah" });
			});
	}
};
