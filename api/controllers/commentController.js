const db = require("./../models");
const Comment = db.Comment;

exports.getComments = function(req, res) {
  Comment.find()
    .then(function(comments) {
      res.json(comments);
    })
    .catch(function(err) {
      res.json(err);
    });
};

exports.getComment = function(req, res) {
  Comment.findById(req.params.commentId)
    .then(function(foundComment) {
      res.json(foundComment);
    })
    .catch(function(err) {
      res.json(err);
    });
};

exports.createComment = function(req, res) {
  Comment.create(req.body)
    .then(function(newComment) {
      res.status(201).json(newComment);
    })
    .catch(function(err) {
      res.json(err);
    });
};

exports.updateComment = function(req, res) {
  Comment.findOneAndUpdate({ _id: req.params.commentId }, req.body, {
    new: true
  })
    .then(function(updatedComment) {
      res.status(201).json(updatedComment);
    })
    .catch(function(err) {
      res.json(err);
    });
};

exports.deleteComment = function(req, res) {
  Comment.remove({ _id: req.params.commentId })
    .then(function() {
      res
        .status(201)
        .json({ message: `comment with ${req.params.commentId} deleted` });
    })
    .catch(function(err) {
      res.json(err);
    });
};

module.exports = exports;
