const express = require('express');
const router = express.Router();
const Issue = require('../models/issue');
const Tag = require('../models/tag');
const User = require('../models/user');

router.get('/', async (req, res) => {
  const tags = await Tag.find();
  res.status(201).json(tags);
});

module.exports = router;
