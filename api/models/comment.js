const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    commentDescription: {
      type: String,
      required: true
    },
    currentUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
