import React from "react";
import PostForm from "../components/post/PostForm";
import { Box, Container, Stack, Typography } from "@mui/material";

const CreatePost = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
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
