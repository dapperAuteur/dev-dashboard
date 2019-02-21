const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');

//test
router.get('/test', (req, res) => {
  res.json({
    message: 'user route works'
  });
});

router.post('/register', (req, res) => {
  db.User.create({ username: 'test789@test.com', password: 'test123' })
    .then(user => {
      req.session.userid = user._id;
      res.status(200).json({
        message: 'user saved successfully'
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  db.User.findOne({ username: username }).then(user => {
    if (!user) {
      return res.status(404).json({ message: 'Invalid Username' });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        req.session.userid = user._id;
        res.status(200);
      } else {
        return res.status(404).json({ message: 'Incorrect Password' });
      }
    });
  });
});

module.exports = router;
