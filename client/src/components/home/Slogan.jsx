import React from "react";

import { Box, Button, Typography } from "@mui/material";

import magni from "../../assets/magni.jpg";

const Slogan = () => {
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
      <Box
        sx={{
          width: { xs: "100vw", sm: "100vw", lg: 400, xl: 400 },
          borderRadius: 10,
        }}
        component="img"
        src={magni}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 4, width: 650 }}
      >
        <Typography variant="h4">
          New graduate, but 5 years experience
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="subtitle2">
            Sick of job postings that require years of experience for
            entry-level positions?
          </Typography>
          <Typography variant="caption">
            You're not alone. Our junior job search app is designed to help you
            find opportunities that match your skills and experience. It's time
            to stop settling and start building your career.
          </Typography>
          <Box>
            <Typography variant="h6">
              Want to see what jobs are out there?
            </Typography>
            <Button variant="contained" href="/jobs">
              Browse Jobs
            </Button>
          </Box>
          <Box>
            <Typography variant="h6">Ready to grow your team?</Typography>
            <Button variant="contained" href="/login" color="secondary">
              Post Job
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Slogan;
