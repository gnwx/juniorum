const Company = require("../models/companyModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const loginCompany = async (req, res) => {
  const { email, password } = req.body;
  try {
    const company = await Company.login(email, password);
    const token = createToken(Company._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupCompany = async (req, res) => {
  const { name, email, password, description, employees, location, socials } =
    req.body;

  try {
    const company = await Company.signup(
      name,
      email,
      password,
      description,
      employees,
      location,
      socials
    );
    const token = createToken(company._id);
    res.status(200).json({ email, socials, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { signupCompany, loginCompany };
