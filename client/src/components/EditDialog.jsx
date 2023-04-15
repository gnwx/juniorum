import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import PostForm from "../components/createPost/PostForm";

const EditDialog = ({ isOpen, setIsOpen, job }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      onClose={() => setIsOpen(false)}
      open={isOpen}
    >
      <DialogTitle>Edit Job</DialogTitle>
      <DialogContent>
        <PostForm isEditing={true} job={job} />
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
