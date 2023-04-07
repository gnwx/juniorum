import * as Yup from "Yup";

export const signupValidation = Yup.object({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Email is not valid.")
    .required("Email is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special symbol."
    ),
  description: Yup.string().required("Description is required."),
  employees: Yup.number()
    .required("Number of employees is required.")
    .positive("Number of employees must be greater than 0.")
    .integer(),
  location: Yup.string().required("Location is required."),
  link: Yup.string()
    .url("Link is not valid.")
    .required("Website or LinkedIn is required."),
  photo: Yup.string().required("Photo is required."),
});
