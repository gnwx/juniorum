import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Link,
  Avatar,
  Box,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

//icons
import GroupIcon from "@mui/icons-material/Group";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const DetailsDialog = ({ job, isOpen, setIsOpen }) => {
  const reqArr = job.requirements.split("*");
  if (reqArr[0] === "") {
    reqArr.shift();
  }
  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      onClose={() => setIsOpen(false)}
      open={isOpen}
    >
      <DialogTitle>
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
            ${job.salary}/Y
          </Stack>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">Who are we?</Typography>
        <Typography variant="body2" sx={{ width: 900, textAlign: "justify" }}>
          {job.company.description}
        </Typography>
        <Typography variant="h6">Job Requirements</Typography>
        <List sx={{ width: 800, listStyleType: "disc", pl: 2 }}>
          {reqArr.map((line, idx) => (
            <ListItem style={{ display: "list-item" }} disablePadding key={idx}>
              <ListItemText primary={line} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions sx={{ gap: 1 }}>
        <Button variant="outlined" href={`mailto:${job.contactEmail}`}>
          Contact
        </Button>
        <Button variant="contained" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsDialog;
