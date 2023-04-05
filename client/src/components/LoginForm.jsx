import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginValidation } from "../helpers/loginValidation";
import { useLogin } from "../hooks/useLogin";
const LoginForm = () => {
  const { login, error, isLoading } = useLogin();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidation}
      onSubmit={(values) => {
        login(values);
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field name="email" type="text" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit" disabled={isLoading}>
          Submit
        </button>
        {error && <div>{error} </div>}
      </Form>
    </Formik>
  );
};

export default LoginForm;
