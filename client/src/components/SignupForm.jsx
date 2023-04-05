import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signupValidation } from "../helpers/signupValidation";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        employees: 0,
        location: "",
      }}
      validationSchema={signupValidation}
      onSubmit={(values) => {
        console.log(values);
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

        <label htmlFor="employees">Employee Number</label>
        <Field name="employees" type="number" />
        <ErrorMessage name="employees" />

        <label htmlFor="location">Location</label>
        <Field name="location" type="text" />
        <ErrorMessage name="location" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
