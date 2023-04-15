import { Avatar, Box } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { useAuthContext } from "../hooks/useAuthContext";

import logo from "../assets/logo.png";

import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  const { company, setLogout } = useAuthContext();
  return (
    <Box
      sx={{
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Avatar src={logo} sx={{ width: 80, height: 80 }} />
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
        <>
          <Button href="/login">Log In</Button>
          <Button href="/signup">Sign up</Button>
        </>
      )}
    </Box>
  );
};

export default Navbar;
