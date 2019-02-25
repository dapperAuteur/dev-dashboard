const express = require("express");
const router = express.Router();
const issueController = require("./../controllers/issueController");

router
  .route("/")
  .get("/", issueController.getIssues)
  .post("/", issueController.createIssue);

router
  .route("/:issueId")
  .get("/:issueId", issueController.getIssue)
  .put("/:issueId", issueController.updateIssue)
  .delete("/:issueId", issueController.deleteIssue);

module.exports = router;
