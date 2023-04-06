const Company = require("../models/companyModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const getCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const company = await Company.findById(id).select("-password");
    if (!company) {
      return res.status(404).json({ message: "Company not found!" });
    }
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const loginCompany = async (req, res) => {
  const { email, password } = req.body;
  try {
    const company = await Company.findOne({ email });

    if (company && (await bcrypt.compare(password, company.password))) {
      const token = createToken(company._id);
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
