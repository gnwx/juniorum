import React from "react";
import LoginForm from "../components/login/LoginForm";
import { Container } from "@mui/material";
import Title from "../components/login/Title";

const Login = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        gap: 10,
      }}
    >
      <Title />
      <LoginForm />
    </Container>
  );
};

export default Login;
