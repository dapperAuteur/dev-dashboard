const db = require("./../models");
const Tag = db.Tag;

exports.createTag = function(req, res) {
  // let newTag = req.body;
  Tag.create(req.body)
    .then(function(newTag) {
      res.status(201).json({ newTag });
    })
    .catch(function(err) {
      res.json({ error: err });
    });
  // let newTag = req.body;
  // newTag.tagName = "new tag";
  // newTag.tagDescription = "what am I about";
  // console.log("newTag", newTag);
  // res.json(newTag);
};

module.exports = exports;
