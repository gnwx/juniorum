import React, { useEffect, useState } from "react";
import Post from "../components/post/Post";
import { Box, CircularProgress, Container, Stack } from "@mui/material";
const Jobs = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    async function fetchJobPosts() {
      try {
        const response = await fetch(`${baseUrl}/api/posts`);
        const posts = await response.json();

        const jobWithCompanyDetails = await Promise.all(
          posts.map(async (post) => {
            const companyResponse = await fetch(
              `${baseUrl}/api/company/${post.company}`
            );
            const company = await companyResponse.json();
            return { ...post, company };
          })
        );
        setJobPosts(jobWithCompanyDetails);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJobPosts();
  }, []);
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {jobPosts.map((job, idx) => (
        <Post key={idx} job={job} />
      ))}
    </Container>
  );
};

export default Jobs;
