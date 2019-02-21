const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/test', (req, res) => {
  res.json({
    message: 'user route works'
  });
  console.log(req.session);
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
      console.log(err);
    });
});

router.get('/get_all', (req, res) => {
  db.User.find({}).then(response => {
    console.log(response);
    //   res.status(200).json({
    //       Users:
    //   })
  });
});

module.exports = router;
