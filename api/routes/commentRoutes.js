const express = require("express");
const commentsController = require("./../controllers/commentController");
const router = express.Router();

router.get("/", commentsController.getComments);

router.get("/:commentId", commentsController.getComment);

router.post("/", commentsController.createComment);

router.put("/:commentId", commentsController.updateComment);

router.delete("/:commentId", commentsController.deleteComment);

module.exports = router;
