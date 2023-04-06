const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniquie: true,
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  employees: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("Company", companySchema);
