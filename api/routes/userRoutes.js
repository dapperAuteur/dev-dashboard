const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:currentUserId', userController.getUserIssues);

module.exports = router;
