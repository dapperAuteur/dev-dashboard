const express = require("express");
const router = express.Router();
const tagController = require("./../controllers/tagController");

router
  .route("/")
  .get(tagController.getTags)
  .post(tagController.createTag);

router
  .route("/:tagId")
  .get(tagController.getTag)
  .put(tagController.updateTag)
  .delete(tagController.deleteTag);

module.exports = router;
