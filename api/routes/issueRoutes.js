const express = require('express');
const router = express.Router();
const Issue = require('../models/issue');
const Tag = require('../models/tag');
const User = require('../models/user');
const verifyAuth = require('../middleware/verifyAuth');

router.get('/', async (req, res) => {
  const issues = await Issue.find().populate('tags', 'tagName');
  res.status(201).json(issues);
});

// Create new Issue
// =============
router.post('/', verifyAuth, async (req, res) => {
  const { user } = req;
  const { issueDescription, resolved, public, issueImages, tags } = req.body;
  const tagsIds = await checkTags(tags);

  const issue = new Issue({
    issueDescription,
    resolved,
    public,
    issueImages,
    tags: tagsIds,
    currentUserId: user._id
  });
  const result = await issue.save();
  res.status(201).json(result);
});

// Check if tags already exists,
// otherwise create new one
// =================================
const checkTags = async tags => {
  const tagsIds = [];
  if (tags.length > 0) {
    for (let i = 0; i < tags.length; i++) {
      const tagObj = tags[i];
      const tag = await Tag.findOne({ tagName: tagObj.tagName });
      if (tag) {
        tagsIds.push({ _id: tag._id });
      } else {
        const newTag = new Tag(tagObj);
        const result = await newTag.save();
        tagsIds.push({ _id: result._id });
      }
    }
  }
  return tagsIds;
};

module.exports = router;
