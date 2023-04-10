import React from "react";
import SignupForm from "../components/signup/SignupForm";
import { Box, Container, Typography } from "@mui/material";
const Signup = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "center",
        minHeight: "70vh",
        gap: 10,
      }}
    >
      <Box>
        <Typography variant="h4">Register to Juniorum</Typography>
      </Box>
      <SignupForm />
    </Container>
  );
};

export default Signup;
