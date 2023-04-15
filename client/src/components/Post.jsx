import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";
import DetailsDialog from "./DetailsDialog";
import EditDialog from "./EditDialog";

//icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GroupIcon from "@mui/icons-material/Group";
import EditIcon from "@mui/icons-material/Edit";
import DeleteDialog from "./DeleteDialog";

const Post = ({ job }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isEditOpen, setIsEdit] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { company } = useAuthContext();
  return (
    <Container
      sx={{
        backgroundColor: "gray",
        width: { xs: "100%", md: 900 },
        height: 200,
      }}
    >
      {company && job.company._id === company._id && (
        <>
          <Button onClick={() => setIsEdit(true)}>
            <EditIcon />
          </Button>
          <Button
            onClick={() => {
              setIsDeleteOpen(true);
            }}
          >
            Delete
          </Button>
        </>
      )}
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
            <Stack direction="row" gap={2} alignItems="center">
              <Typography variant="button">{job.company.name}</Typography>
              <Typography
                variant="caption"
                sx={{ alignItems: "center", display: "inline-flex" }}
              >
                <GroupIcon fontSize="xs" />
                {job.company.employees}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography
                variant="caption"
                sx={{ alignItems: "center", display: "inline-flex" }}
              >
                <LocationOnIcon fontSize="xs" />
                {job.location}
              </Typography>
              <Typography
                variant="caption"
                sx={{ alignItems: "center", display: "inline-flex" }}
              >
                <WorkIcon fontSize="xs" />
                {job.type}
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Stack>
          <Link href={job.company.link}>
            {job.company.link.startsWith("https://linkedin") ? (
              <LinkedInIcon />
            ) : (
              <InsertLinkIcon />
            )}
          </Link>
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
            width: "80%",
            height: 40,
          }}
        >
          {job.company.description}
        </Typography>

        <Stack>
          <Typography variant="button"> ${job.salary}/y</Typography>
          <Button variant="contained" onClick={() => setIsDetailsOpen(true)}>
            Details
          </Button>
        </Stack>
      </Box>
      <DetailsDialog
        job={job}
        isOpen={isDetailsOpen}
        setIsOpen={setIsDetailsOpen}
      />
      <EditDialog job={job} isOpen={isEditOpen} setIsOpen={setIsEdit} />
      <DeleteDialog
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        job={job}
      />
    </Container>
  );
};

export default Post;
