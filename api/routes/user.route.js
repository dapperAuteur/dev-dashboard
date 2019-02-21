const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/test', (req, res) => {
  res.json({
    message: 'user route works'
  });
});

router.post('/create', (req, res) => {
  db.User.create({ username: 'test789@test.com', password: 'test123' })
    .then(user => {
      res.status(200).json({
        user: user,
        message: 'user saved successfully'
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
