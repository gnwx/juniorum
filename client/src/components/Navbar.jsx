import { Avatar, Box } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { company, setLogout } = useAuthContext();
  return (
    <Box sx={{ height: 60 }}>
      {company ? (
        <Box sx={{ display: "flex" }}>
          <Button onClick={setLogout}>Log out</Button>
          <Avatar src={company.photo} />
          <Button href="/create">Post Job </Button>
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
