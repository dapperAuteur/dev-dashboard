const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/register", async (req, res) => {
  let { username, password, profilePicture } = req.body;

  let user = await User.findOne({ username });
  if (user) return res.status(400).json({ error: "User already exists" });

  user = new User({
    username,
    password,
    profilePicture
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  const token = user.generateAuthToken();

  try {
    await user.save();
    res.status(201).json({ token: token });
  } catch (ex) {
    res.status(500).json({ error: "something went wrong on server side" });
  }
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;
  console.log("req.body", req.body);
  let user = await User.findOne({ username });

  if (!user)
    return res.status(400).json({ error: "Invalid username or password" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: "Invalid username or password" });

  const token = user.generateAuthToken();
  res.status(201).json({ token: token });
});

module.exports = router;
