const express = require("express");
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
router.post("/", createPost);
// delete job
router.delete("/:id", deletePost);

// update job
router.patch("/:id", updatePost);

module.exports = router;
