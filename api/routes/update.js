const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const verifyAuth = require('../middleware/verifyAuth');

router.post('/', verifyAuth, async (req, res) => {
  const { username } = req.user;
  const { oldpass, newpass, newPicUrl } = req.body;
  const user = await User.findOne({ username });
  const validPassword = await bcrypt.compare(oldpass, user.password);
  if (!validPassword)
    return res.status(400).json({ error: 'Old password is incorrect' });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newpass, salt);
  user.profilePicture = newPicUrl;
  const token = user.generateAuthToken();
  try {
    await user.save();
    res.status(201).json(token);
  } catch (ex) {
    res.status(500).json({ error: 'Something went wrong at sever side' });
  }
});

module.exports = router;
