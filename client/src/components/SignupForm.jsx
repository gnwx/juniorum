import React from "react";
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
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <label htmlFor="description">Description</label>
        <Field name="description" type="text" />
        <ErrorMessage name="description" />

        <label htmlFor="employees">Employee Number</label>
        <Field name="employees" type="number" />
        <ErrorMessage name="employees" />

        <label htmlFor="location">Location</label>
        <Field name="location" type="text" />
        <ErrorMessage name="location" />

        <button type="submit" disabled={isLoading}>
          Submit
        </button>
        {error && <div>{error} </div>}
      </Form>
    </Formik>
  );
};

export default SignupForm;
