const express = require('express');
const router = express.Router();
const issueController = require('./../controllers/issueController');

router.get('/', issueController.getIssues);

// router.get('/user/:userId', issueController.getUserIssues);

router.get('/:issueId', issueController.getIssue);

router.post('/', issueController.createIssue);

router.put('/:issueId', issueController.updateIssue);

router.delete('/:issueId', issueController.deleteIssue);

module.exports = router;
