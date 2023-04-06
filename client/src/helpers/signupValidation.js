import * as Yup from "yup";

export const signupValidation = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  description: Yup.string().required(),
  password: Yup.string().required(),
  employees: Yup.number().required(),
  location: Yup.string().required(),
});
