import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";

//icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GroupIcon from "@mui/icons-material/Group";
const Post = ({ job }) => {
  return (
    <Container
      sx={{
        backgroundColor: "#F4F8FB",
        width: { xs: "100%", md: 900 },
        height: 200,
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginTop: 2,
          marginBottom: 2,
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          <Avatar src={job.company.photo} sx={{ width: 90, height: 90 }} />
          <Box>
            <Typography variant="h6"> {job.position} </Typography>
            <Stack direction="row" gap={2}>
              <Typography variant="button">{job.company.name}</Typography>
              <Typography variant="caption">
                <GroupIcon fontSize="xs" />
                {job.company.employees}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="caption">
                <LocationOnIcon fontSize="xs" />
                {job.location}
              </Typography>
              <Typography variant="caption">
                <WorkIcon fontSize="xs" />
                {job.type}
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Stack>
          {job.company.link.startsWith("https://www.linkedin") ? (
            <Link href={job.company.link}>
              <LinkedInIcon />{" "}
            </Link>
          ) : (
            <Link href={job.company.link}>
              <InsertLinkIcon />
            </Link>
          )}
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            display: { xs: "none", sm: "block" },
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "40rem",
            height: 40,
          }}
        >
          {job.company.description}
        </Typography>
        <Stack>
          <Typography variant="button"> ${job.salary}/y</Typography>
          <Button variant="contained">Details</Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Post;
