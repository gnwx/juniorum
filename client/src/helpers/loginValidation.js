import * as Yup from "yup";

export const loginValidation = Yup.object({
  email: Yup.string().email(),
  password: Yup.string().required("Please Enter your password"),
});
