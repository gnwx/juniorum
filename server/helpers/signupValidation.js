const { check } = require("express-validator");

const signupCompanyValidators = [
  check("name").not().isEmpty().withMessage("Name is required."),
  check("email")
    .not()
    .isEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email is not valid."),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    )
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special symbol."
    ),
  check("description").not().isEmpty().withMessage("Description is required."),
  check("employees")
    .not()
    .isEmpty()
    .withMessage("Number of employees is required.")
    .isInt({ gt: 0 })
    .withMessage("Number of employees must be greater than 0."),
  check("location").not().isEmpty().withMessage("Location is required."),
  check("link")
    .not()
    .isEmpty()
    .withMessage("Link is required.")
    .isURL()
    .withMessage("Link is not valid."),
  check("photo").not().isEmpty().withMessage("Photo is required."),
];

module.exports = signupCompanyValidators;
