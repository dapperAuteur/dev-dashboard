const express = require("express");
const commentsController = require("./../controllers/commentController");
const router = express.Router();

router
  .route("/")
  .get("/", commentsController.getComments)
  .post("/", commentsController.createComment);

router
  .route("/:commentId")
  .get("/:commentId", commentsController.getComment)
  .put("/:commentId", commentsController.updateComment)
  .delete("/:commentId", commentsController.deleteComment);

module.exports = router;
