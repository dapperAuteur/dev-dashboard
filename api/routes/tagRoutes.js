const express = require("express");
const router = express.Router();
const tagController = require("./../controllers/tagController");

router.get("/", tagController.getTags);

router.get("/:tagId", tagController.getTag);

router.post("/", tagController.createTag);

router.put("/:tagId", tagController.updateTag);

router.delete("/:tagId", tagController.deleteTag);

module.exports = router;
