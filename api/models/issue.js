const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema(
  {
    issueDescription: {
      type: String,
      required: true
    },
    resolved: {
      type: Boolean,
      default: false
    },
    public: {
      type: Boolean,
      default: true
    },
    issueImages: {
      type: [String]
    },
    currentUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
      }
    ]
  },
  {
    timestamps: true
  }
);

const Issue = mongoose.model('Issue', issueSchema);
module.exports = Issue;
