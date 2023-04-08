const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    position: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
