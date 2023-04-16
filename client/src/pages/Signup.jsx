import React from "react";
import SignupForm from "../components/signup/SignupForm";
import { Box, Container, Typography } from "@mui/material";
const Signup = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h4">Sign up</Typography>
      </Box>
      <SignupForm />
    </Container>
  );
};

export default Signup;
