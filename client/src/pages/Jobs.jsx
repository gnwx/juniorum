import React, { useEffect, useState } from "react";
import Post from "../components/post/Post";
import { Box, CircularProgress, Stack } from "@mui/material";
const Jobs = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchJobPosts() {
      try {
        const response = await fetch("http://localhost:4000/api/posts");
        const posts = await response.json();

        const jobWithCompanyDetails = await Promise.all(
          posts.map(async (post) => {
            const companyResponse = await fetch(
              `http://localhost:4000/api/company/${post.company}`
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
    <Stack spacing={4}>
      {jobPosts.map((job, idx) => (
        <Post key={idx} job={job} />
      ))}
    </Stack>
  );
};

export default Jobs;
