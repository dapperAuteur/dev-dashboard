const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.json([
    { time: Date.now() },
    { tagName: "javaScript", tagDescription: "what am I about" },
    { tagName: "ReactJS", tagDescription: "Am I a framework or library?" },
    { tagName: "recursion", tagDescription: "are you looking for recursion" }
  ]);
});

router.get("/:tagId", function(req, res) {
  res.json({ tagName: "javaScript", tagDescription: "what am I about" });
});

router.post("/", function(req, res) {
  // let newTag = req.body.newTag;
  let newTag = req.body;
  newTag.tagName = "new tag";
  newTag.tagDescription = "what am I about";
  console.log("newTag", newTag);
  res.json(newTag);
});

router.put("/:tagId", function(req, res) {
  // let updatedTag = req.body.updatedTag;
  let updatedTag = req.body;
  updatedTag.tagName = "updated tag";
  updatedTag.tagDescription = "what am I about";
  console.log("updatedTag", updatedTag);
  res.json(updatedTag);
});

router.delete("/:tagId", function(req, res) {
  let tagId = "2";
  res.json({ message: `tag with ${tagId} deleted` });
});

module.exports = router;
