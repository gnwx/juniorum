import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { usePost } from "../hooks/usePost";

const DeleteDialog = ({ isOpen, setIsOpen, job }) => {
  const { deletePost } = usePost();

  const handleClick = () => {
    deletePost(job._id);
    setIsOpen(false);
  };
  return (
    <Dialog onClose={() => setIsOpen(false)} open={isOpen}>
      <DialogTitle>Do you want to delete "{job.position}" post? </DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button onClick={handleClick}>Yes</Button>
        <Button onClick={() => setIsOpen(false)}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
