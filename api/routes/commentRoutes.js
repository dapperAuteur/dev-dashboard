const express = require("express");
const commentsController = require("./../controllers/commentController");
const router = express.Router();

router
  .route("/")
  .get(commentsController.getComments)
  .post(commentsController.createComment);

router
  .route("/:commentId")
  .get(commentsController.getComment)
  .put(commentsController.updateComment)
  .delete(commentsController.deleteComment);

module.exports = router;
