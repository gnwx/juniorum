const express = require("express");
const {
  signupCompany,
  loginCompany,
  getCompanies,
} = require("../controllers/companyController");
const router = express.Router();

router.post("/signup", signupCompany);
router.post("/login", loginCompany);
router.get("/:id", getCompanies);
module.exports = router;
