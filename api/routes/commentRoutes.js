const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.json(["array", "of", "comments"]);
});

router.get("/:commentId", function(req, res) {
  res.json({
    title: "comment title",
    commentDescription: "description of comment",
    currentUserId: 2
  });
});

router.post("/", function(req, res) {
  res.json({
    title: "new comment title ",
    commentDescription: "new description of comment",
    currentUserId: 4
  });
});

router.put("/:commentId", function(req, res) {
  res.json({
    title: "updated comment title ",
    commentDescription: "updated description of comment",
    currentUserId: 5
  });
});

router.delete("/:commentId", function(req, res) {
  res.json({ message: "comment deleted" });
});

module.exports = router;
