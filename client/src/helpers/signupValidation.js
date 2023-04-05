import * as Yup from "yup";

export const signupValidation = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  employees: Yup.number().required(),
  location: Yup.string().required(),
});
