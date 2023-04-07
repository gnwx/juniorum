const express = require("express");
const auth = require("../middleware/auth");
const postValidation = require("../helpers/postValidation");
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/postController");

const router = express.Router();

// get all jobs
router.get("/", getPosts);
// get single job
router.get("/:id", getPost);
// post new job
router.post("/", auth, postValidation, createPost);
// delete job
router.delete("/:id", auth, deletePost);

// update job
router.patch("/:id", auth, updatePost);

module.exports = router;
