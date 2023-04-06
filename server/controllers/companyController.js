const Company = require("../models/companyModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const getCompanies = async (req, res) => {
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
    const company = await Company.login(email, password);
    const token = createToken(Company._id);
    res.status(200).json({ company, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
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
    /*  socials, */
    photo,
  } = req.body;

  try {
    const company = await Company.signup(
      name,
      email,
      password,
      description,
      employees,
      location /*  socials, */,
      photo
    );
    const token = createToken(company._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { signupCompany, loginCompany, getCompanies };
