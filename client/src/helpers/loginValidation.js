import * as Yup from "Yup";

export const loginValidation = Yup.object({
  email: Yup.string().email().required("Please enter a valid email"),
  password: Yup.string().required("Please Enter your password"),
});
