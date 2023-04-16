import { Box, Typography } from "@mui/material";
import React from "react";

import list from "../../assets/list.jpg";
const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          lg: "row",
          xl: "row",
        },
        alignItems: {
          xs: "center",
          sm: "center",
          lg: "flex-start",
          xl: "flex-start",
        },
      }}
    >
      <Box paddingY={10}>
        <Typography variant="h1">Juniorum</Typography>
        <Typography variant="subtitle1">
          Discover junior job openings in your area with our easy-to-use app!
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100vw", sm: "100vw", lg: 400, xl: 500 },
          borderRadius: 100,
        }}
        component="img"
        src={list}
      />
    </Box>
  );
};

export default Hero;
