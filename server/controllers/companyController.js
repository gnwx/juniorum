const Company = require("../models/companyModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { body, validationResult, check } = require("express-validator");
const { isStrongPassword } = require("validator");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2h" });
};

const getCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const company = await Company.findById(id).select("-password");
    if (!company) {
      return res.status(404).json({ message: "Company not found!" });
    }

    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const loginCompany = async (req, res) => {
  const { email, password } = req.body;
  await body("email").isEmail().normalizeEmail().run(req);
  await body("password")
    .custom((value) => {
      if (!isStrongPassword(value)) {
        throw new Error(
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol."
        );
      }
      return true;
    })
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const company = await Company.findOne({ email });

    if (company && (await bcrypt.compare(password, company.password))) {
      const token = createToken(company._id);
      res.cookie("token", token);
      res.status(200).json({ company, token });
    } else {
      res.status(400).json("Invalid credentials");
    }
  } catch (error) {
    console.log(error);
  }
};

const signupCompany = async (req, res) => {
  const {
    name,
    email,
    password,
    description,
    employees,
    location,
    link,
    photo,
  } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const isExists = await Company.findOne({ email });
    if (isExists) {
      return res.status(409).send("Company already registered!");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const company = await Company.create({
      name,
      email,
      password: hashedPassword,
      description,
      employees,
      location,
      link,
      photo,
    });

    const token = createToken(company._id);
    res.status(201).json({ company, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { signupCompany, loginCompany, getCompany };
