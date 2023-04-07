const { body } = require("express-validator");

const createPostValidation = [
  body("position").notEmpty().withMessage("Position is required"),
  body("requirements").notEmpty().withMessage("Requirements are required"),
  body("type").notEmpty().withMessage("Type is required"),
  body("salary").notEmpty().withMessage("Salary is required"),
  body("location").notEmpty().withMessage("Location is required"),
  body("contactEmail").isEmail().withMessage("Invalid email"),
];

module.exports = createPostValidation;
