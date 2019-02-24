const db = require('./../models');
const Issue = db.Issue;

exports.getIssues = function(req, res) {
  Issue.find()
    .then(function(issues) {
      res.json(issues);
    })
    .catch(function(err) {
      res.json({ error: err });
    });
};

exports.getIssue = function(req, res) {
  Issue.find(req.params.issueId)
    .then(function(foundIssue) {
      res.json({ foundIssue });
    })
    .catch(function(err) {
      res.json({ error: err });
    });
};

exports.createIssue = function(req, res) {
  Issue.create(req.body)
    .then(function(newIssue) {
      res.status(201).json({ newIssue });
    })
    .catch(function(err) {
      res.json({ error: err });
    });
};

exports.updateIssue = function(req, res) {
  Issue.findOneAndUpdate({ _id: req.params.issueId }, req.body, { new: true })
    .then(function(updatedIssue) {
      res.status(201).json({ updatedIssue });
    })
    .catch(function(err) {
      res.json({ error: err });
    });
};

exports.deleteIssue = function(req, res) {
  Issue.remove({ _id: req.params.issueId }).then(function() {
    res
      .status(201)
      .json({ message: `issue with ${req.params.issueId} deleted` });
  });
};
