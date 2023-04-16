import { useState } from "react";

import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
} from "@mui/material";

import { usePost } from "../../hooks/usePost";

const DeleteDialog = ({ isOpen, setIsOpen, job }) => {
  const { deletePost, error } = usePost();
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = async () => {
    const success = await deletePost(job._id);
    setIsOpen(false);
    if (success) {
      setShowAlert(true);
    }
  };

  return (
    <>
      <Dialog onClose={() => setIsOpen(false)} open={isOpen}>
        <DialogTitle>Do you want to delete "{job.position}" post? </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Yes</Button>
          <Button onClick={() => setIsOpen(false)}>No</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert severity="success" onClose={() => setShowAlert(false)}>
          Post deleted successfully!
        </Alert>
      </Snackbar>
      {error && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          onClose={() => {}}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert severity="error" onClose={() => {}}>
            Post deletion failed!
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
export default DeleteDialog;
