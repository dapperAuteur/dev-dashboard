const db = require("./../models");
const Tag = db.Tag;

exports.getTags = function(req, res) {
  Tag.find()
    .then(function(tags) {
      res.json({ tags });
    })
    .catch(function(err) {
      res.json({ error: err });
    });
};

exports.getTag = function(req, res) {
  Tag.find(req.params.tagId)
    .then(function(foundTag) {
      res.json({ foundTag });
    })
    .catch(function(err) {
      res.json({ error: err });
    });
};

exports.createTag = function(req, res) {
  // let newTag = req.body;
  Tag.create(req.body)
    .then(function(newTag) {
      res.status(201).json({ newTag });
    })
    .catch(function(err) {
      res.json({ error: err });
    });
};

exports.updateTag = function(req, res) {
  Tag.findOneAndUpdate({ _id: req.params.tagId }, req.body, {
    new: true
  })
    .then(function(updatedTag) {
      res.status(201).json({ updatedTag });
    })
    .catch(function(err) {
      res.json({ error: err });
    });
};

exports.deleteTag = function(req, res) {
  Tag.remove({ _id: req.params.tagId })
    .then(function() {
      res
        .status(201)
        .json({ message: `comment with ${req.params.tagId} deleted` });
    })
    .catch(function(err) {
      res.json({ error: err });
    });
};

module.exports = exports;
