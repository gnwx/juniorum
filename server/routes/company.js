const express = require("express");
const {
  signupCompany,
  loginCompany,
} = require("../controllers/companyController");
const router = express.Router();

router.post("/signup", signupCompany);
router.post("/login", loginCompany);

module.exports = router;
