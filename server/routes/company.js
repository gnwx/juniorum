const express = require("express");
const {
  signupCompany,
  loginCompany,
  getCompany,
} = require("../controllers/companyController");
const signupCompanyValidators = require("../helpers/signupValidation");
const router = express.Router();

router.post("/signup", signupCompanyValidators, signupCompany);
router.post("/login", loginCompany);
router.get("/:id", getCompany);
module.exports = router;
