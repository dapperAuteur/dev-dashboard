const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  let issues = ["array", "of", "issues"];
  res.json(issues);
});

router.get("/:issueId", function(req, res) {
  let issue = {
    issueDescription: "description of issue",
    resolved: false,
    public: true,
    issueImages: "string to image",
    currentUserId: 2,
    tags: [23, 32, 53]
  };
  res.json({ issue });
});

router.post("/", function(req, res) {
  let newIssue = req.body.newIssue; //body should contain object with name `newIssue`
  res.json(newIssue);
});

router.put("/:issueId", function(req, res) {
  let updatedIssue = req.body.updatedIssue; //body should contain object with name `updatedIssue`
  res.json(updatedIssue);
});

router.delete("/:issueId", function(req, res) {
  res.json({ message: "issue deleted" });
});

module.exports = router;
