import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Formik, Form } from "formik";
import { loginValidation } from "../../helpers/loginValidation";
import { useLogin } from "../../hooks/useLogin";
import { Alert, Box, Snackbar, Stack } from "@mui/material";
import { theme } from "../../helpers/theme";

import { Link } from "react-router-dom";

const LoginForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [failMessage, setFailMessage] = useState("");

  const { login, error, isLoading } = useLogin();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidation}
      onSubmit={(values) => {
        const success = login(values);
        if (success) {
          setSuccessMessage("Logged in succesfully!");
          setFailMessage("");
        } else {
          setSuccessMessage("");
          setFailMessage("Failed when logging!");
        }
      }}
    >
      {({ errors, touched, getFieldProps }) => (
        <Form>
          <Snackbar
            open={Boolean(successMessage)}
            autoHideDuration={2000}
            onClose={() => setSuccessMessage("")}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <Alert onClose={() => setSuccessMessage("")} severity="success">
              {successMessage}
            </Alert>
          </Snackbar>
          <Snackbar
            open={Boolean(failMessage)}
            autoHideDuration={3000}
            onClose={() => setFailMessage("")}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <Alert onClose={() => setFailMessage("")} severity="error">
              {failMessage}
            </Alert>
          </Snackbar>
          <Stack spacing={2}>
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
            <Box component="span" fontFamily={theme.typography.fontFamily}>
              Don't you have account? <Link to="/signup">Create</Link> one!
            </Box>
            <Button
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              Login
            </Button>

            {error && <div>{error} </div>}
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
