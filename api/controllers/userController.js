const db = require('./../models');
const Issue = db.Issue;

//find all issues with this user id

exports.getUserIssues = function(req, res) {
  //   let currentUserId = req.params.currentUserId;
  //   console.log(currentUserId);
  Issue.find({ currentUserId: req.params.currentUserId })
    .then(userIssues => {
      return res.status(200).json({
        userIssues: userIssues
      });
      //   console.log(userIssues);
    })
    .catch(err => {
      console.log(err);
    });
};
