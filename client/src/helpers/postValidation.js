import * as Yup from "Yup";

export const postValidation = Yup.object({
  position: Yup.string().required("Position is required"),
  requirements: Yup.string().required("Requirements are required"),
  type: Yup.string().required("Type is required"),
  salary: Yup.string().required("Salary is required"),
  location: Yup.string().required("Location is required"),
  contactEmail: Yup.string()
    .email("Invalid email")
    .required("Contact email is required"),
});
