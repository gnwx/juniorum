import * as Yup from "yup";

export const postValidation = Yup.object({
  contactEmail: Yup.string().email(),
  position: Yup.string().required(),
  type: Yup.string().required(),
  requirements: Yup.string().required(),
  salary: Yup.number(),
  location: Yup.string().required(),
});

/*

initialValues={{
        contactEmail: "",
        position: "",
        type: "",
        requirements: "",
        salary: 0,
        location: "",
        company: company,
      }}
      
      */
