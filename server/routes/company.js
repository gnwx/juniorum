const express = require("express");
const {
  signupCompany,
  loginCompany,
  getCompany,
} = require("../controllers/companyController");
const router = express.Router();

router.post("/signup", signupCompany);
router.post("/login", loginCompany);
router.get("/:id", getCompany);
module.exports = router;
