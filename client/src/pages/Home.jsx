import React from "react";
import { Container } from "@mui/material";

import Hero from "../components/home/Hero";
import Slogan from "../components/home/Slogan";
const Home = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginBottom: 5,
      }}
    >
      <Hero />
      <Slogan />
    </Container>
  );
};

export default Home;
