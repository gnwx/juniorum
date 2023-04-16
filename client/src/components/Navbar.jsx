import { Avatar, Box, Container, Link, Stack } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { useAuthContext } from "../hooks/useAuthContext";

import logo from "/logo.png";

import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  const { company, setLogout } = useAuthContext();
  return (
    <Container
      sx={{
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginY: 2,
      }}
    >
      <Link href="/">
        <Avatar src={logo} sx={{ width: 80, height: 80 }} />
      </Link>
      {company ? (
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button href="/create" variant="outlined" startIcon={<AddIcon />}>
            Add Job
          </Button>
          <Avatar src={company.photo} />
          <Button onClick={setLogout}>
            <LogoutIcon />
          </Button>
        </Box>
      ) : (
        <Stack direction="row" gap={2}>
          <Button variant="outlined" href="/login">
            Log In
          </Button>
          <Button variant="contained" href="/jobs">
            Browse Jobs
          </Button>
        </Stack>
      )}
    </Container>
  );
};

export default Navbar;
