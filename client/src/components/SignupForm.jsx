import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signupValidation } from "../helpers/signupValidation";
import { useSignup } from "../hooks/useSignup";

const SignupForm = () => {
  const { signup, isLoading, error } = useSignup();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        description: "",
        employees: 0,
        location: "",
      }}
      validationSchema={signupValidation}
      onSubmit={(values, { resetForm }) => {
        signup(values);
        resetForm();
      }}
    >
      {({ errors, touched, getFieldProps, isSubmitting }) => (
        <Form>
          <TextField
            {...getFieldProps("name")}
            label="Name"
            variant="outlined"
            fullWidth
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />

          <TextField
            {...getFieldProps("email")}
            label="Email"
            variant="outlined"
            fullWidth
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            {...getFieldProps("password")}
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />

          <TextField
            {...getFieldProps("description")}
            label="Description"
            variant="outlined"
            fullWidth
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
          />

          <TextField
            {...getFieldProps("employees")}
            label="Employee Number"
            variant="outlined"
            type="number"
            fullWidth
            error={touched.employees && Boolean(errors.employees)}
            helperText={touched.employees && errors.employees}
          />

          <TextField
            {...getFieldProps("location")}
            label="Location"
            variant="outlined"
            fullWidth
            error={touched.location && Boolean(errors.location)}
            helperText={touched.location && errors.location}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Submit
          </Button>

          {error && <div>{error} </div>}
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
