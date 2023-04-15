import React, { useEffect, useState } from "react";
import Post from "../components/post/Post";
import { Stack } from "@mui/material";
const Jobs = () => {
  const [jobPosts, setJobPosts] = useState([]);

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
      } catch (error) {
        console.log(error);
      }
    }
    fetchJobPosts();
  }, []);
  return (
    <Stack spacing={4}>
      {jobPosts.map((job, idx) => (
        <Post key={idx} job={job} />
      ))}
    </Stack>
  );
};

export default Jobs;
