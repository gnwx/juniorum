const Post = require("../models/postModel");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.status(200).json(posts);
};

const getPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID!" });
  }

  const post = await Post.findById(id);
  if (!post) {
    return res.status(404).json({ error: "No such post" });
  }

  res.status(200).json(post);
};

const createPost = async (req, res) => {
  const { position, requirements, type, salary, location, contactEmail } =
    req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const job = await Post.create({
      position,
      requirements,
      type,
      salary,
      location,
      contactEmail,
      company: req.company,
    });
    res.status(200).json({ job });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid request!" });
  }
  const post = await Post.findOneAndDelete({ _id: id });
  if (!post) {
    return res.status(400).json({ error: "No such post!" });
  }

  res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID!" });
  }

  const post = await Post.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!post) {
    return res.status(404).json({ error: "No such post" });
  }

  res.status(200).json(post);
};

module.exports = { getPosts, getPost, createPost, deletePost, updatePost };
