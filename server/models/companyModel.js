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
  socails: {
    type: [String],
    default: [],
  },
});

companySchema.statics.signup = async function (
  name,
  email,
  password,
  description,
  employees,
  location,
  socials
) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const company = await this.create({
    name,
    email,
    password: hash,
    description,
    employees,
    location,
    socials,
  });

  return company;
};

companySchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled!");
  }

  const company = await this.findOne({ email });

  if (!company) {
    throw Error("Invalid email");
  }

  const match = await bcrypt.compare(password, company.password);
  if (!match) {
    throw Error("Incorrect password!");
  }

  return company;
};

module.exports = mongoose.model("Company", companySchema);
