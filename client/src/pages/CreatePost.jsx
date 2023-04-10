import React from "react";
import PostForm from "../components/createPost/PostForm";
import { Box, Container, Stack, Typography } from "@mui/material";

const CreatePost = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Box>
        <Typography variant="h4">Create Job post</Typography>
      </Box>
      <PostForm />
    </Container>
  );
};

export default CreatePost;
