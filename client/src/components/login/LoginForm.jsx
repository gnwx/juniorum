import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Formik, Form } from "formik";
import { loginValidation } from "../../helpers/loginValidation";
import { useLogin } from "../../hooks/useLogin";
import { Box, Stack } from "@mui/material";
import { theme } from "../../helpers/theme";

import { Link } from "react-router-dom";

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
      {({ errors, touched, getFieldProps }) => (
        <Form>
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
