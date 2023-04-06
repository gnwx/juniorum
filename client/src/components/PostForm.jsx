import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { usePost } from "../hooks/usePost";
import { postValidation } from "../helpers/postValidation";
const PostForm = () => {
  const { post, isLoading } = usePost();

  const company = JSON.parse(localStorage.getItem("company"));
  return (
    <Formik
      initialValues={{
        contactEmail: "",
        position: "",
        type: "",
        requirements: "",
        salary: 0,
        location: "",
        company: company,
      }}
      validationSchema={postValidation}
      onSubmit={(values, { resetForm }) => {
        post(values);
        resetForm();
      }}
    >
      {({ errors, touched, getFieldProps }) => (
        <Form>
          <TextField
            {...getFieldProps("contactEmail")}
            label="contactEmail"
            variant="outlined"
            fullWidth
            error={touched.contactEmail && Boolean(errors.contactEmail)}
            helperText={touched.contactEmail && errors.contactEmail}
          />

          <TextField
            {...getFieldProps("position")}
            label="position"
            variant="outlined"
            fullWidth
            error={touched.position && Boolean(errors.position)}
            helperText={touched.position && errors.position}
          />

          <TextField
            {...getFieldProps("type")}
            label="type"
            variant="outlined"
            type="text"
            fullWidth
            error={touched.type && Boolean(errors.type)}
            helperText={touched.type && errors.type}
          />

          <TextField
            {...getFieldProps("requirements")}
            label="requirements"
            variant="outlined"
            fullWidth
            error={touched.requirements && Boolean(errors.requirements)}
            helperText={touched.requirements && errors.requirements}
          />

          <TextField
            {...getFieldProps("salary")}
            label="salary"
            variant="outlined"
            type="number"
            fullWidth
            error={touched.salary && Boolean(errors.salary)}
            helperText={touched.salary && errors.salary}
          />

          <TextField
            {...getFieldProps("location")}
            label="location"
            variant="outlined"
            fullWidth
            error={touched.location && Boolean(errors.location)}
            helperText={touched.location && errors.location}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            Create job
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PostForm;
