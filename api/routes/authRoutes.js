const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');
const Issue = db.Issue;

//test
router.get('/test', (req, res) => {
  res.json({
    message: 'user route works'
  });
});

router.post('/register', (req, res) => {
  let { username, password } = req.body;
  db.User.create({ username: username, password: password })
    .then(user => {
      req.session.userid = user._id;
      user.password = '';
      user.session = req.session;
      return res.status(201).json({ user });
    })
    .catch(err => {
      return res.status(500).json({
        error: err
      });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  let userObj = {};
  db.User.findOne({ username: username })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'Invalid Username' });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          Issue.find({ currentUserId: user._id })
            .then(issues => {
              req.session.userid = user._id;
              userObj._id = user._id;
              userObj.session = req.session;
              userObj.issues = issues;
              return res.status(201).json(userObj);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          return res.status(404).json({ message: 'Incorrect Password' });
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if (err) {
        return next(err);
      } else {
        return res.status(201).json({ message: 'successfully logged out' });
      }
    });
  }
});

module.exports = router;
