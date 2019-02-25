const express = require("express");
const router = express.Router();
const issueController = require("./../controllers/issueController");

router
  .route("/")
  .get(issueController.getIssues)
  .post(issueController.createIssue);

router
  .route("/:issueId")
  .get(issueController.getIssue)
  .put(issueController.updateIssue)
  .delete(issueController.deleteIssue);

module.exports = router;
