import { Box } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
  const { company, setLogout } = useAuthContext();
  return (
    <Box sx={{ height: 60 }}>
      {company ? (
        <Button onClick={setLogout}>Log out</Button>
      ) : (
        <Button href="/login">Log In</Button>
      )}
    </Box>
  );
};

export default Navbar;
