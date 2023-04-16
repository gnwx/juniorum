import React, { useState } from "react";

//mui componenets
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { Formik, Field, Form } from "formik";

import { usePost } from "../../hooks/usePost";
import { postValidation } from "../../helpers/postValidation";

//
import { salaryOptions, typeOptions, positions } from "../../helpers/constants";
import LocationInput from "../LocationInput";
import { Alert, InputLabel, Snackbar, Stack } from "@mui/material";

const PostForm = ({ isEditing, job }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const { post, edit, isLoading, error } = usePost();

  const [failMessage, setFailMessage] = useState(error);

  const company = JSON.parse(sessionStorage.getItem("company"));

  const initialValues = isEditing
    ? {
        contactEmail: job.company.email || "",
        position: job.position,
        type: job.type,
        requirements: job.requirements,
        salary: job.salary,
        location: job.location,
        company: job.company,
      }
    : {
        contactEmail: company.email || "",
        position: "",
        type: "",
        requirements: "",
        salary: "",
        location: company.location || "",
        company: company,
      };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={postValidation}
      onSubmit={async (values, { resetForm }) => {
        const success = await (isEditing
          ? edit(job._id, values)
          : post(values));
        resetForm();
        if (success) {
          setSuccessMessage(
            isEditing ? "Post edited succesfully" : "Post created succesfully"
          );
          setFailMessage("");
        } else {
          setSuccessMessage("");
          setFailMessage(
            isEditing ? "Post edit failed" : "Post creation failed"
          );
        }
      }}
    >
      {({ errors, touched, getFieldProps, values, setFieldValue }) => (
        <Form>
          <Snackbar
            open={Boolean(successMessage)}
            autoHideDuration={2000}
            onClose={() => setSuccessMessage("")}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <Alert onClose={() => setSuccessMessage("")} severity="success">
              {successMessage}
            </Alert>
          </Snackbar>
          <Snackbar
            open={Boolean(failMessage)}
            autoHideDuration={3000}
            onClose={() => setFailMessage("")}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <Alert onClose={() => setFailMessage("")} severity="error">
              {failMessage}
            </Alert>
          </Snackbar>
          <Stack spacing={1} sx={{ minWidth: 600 }}>
            <TextField
              {...getFieldProps("contactEmail")}
              disabled={values.useSessionEmail}
              label="Contact Email"
              variant="outlined"
              fullWidth
              error={touched.contactEmail && Boolean(errors.contactEmail)}
              helperText={touched.contactEmail && errors.contactEmail}
            />
            <InputLabel id="position-label">Position</InputLabel>

            <Field
              name="position"
              as={Select}
              fullWidth
              labelId="job-type-label"
              variant="outlined"
              error={touched.position && Boolean(errors.position)}
            >
              {positions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>

            <InputLabel id="job-type-label">Job Type</InputLabel>
            <Field
              name="type"
              as={Select}
              fullWidth
              variant="outlined"
              error={touched.type && Boolean(errors.type)}
              labelId="job-type-label"
              sx={{ marginBottom: "1rem" }}
            >
              {typeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>

            <TextField
              {...getFieldProps("requirements")}
              multiline
              minRows={6}
              maxRows={10}
              label="Requirements"
              variant="outlined"
              fullWidth
              error={touched.requirements && Boolean(errors.requirements)}
              helperText={touched.requirements && errors.requirements}
            />
            <InputLabel id="salary-label">Salary </InputLabel>

            <Field
              name="salary"
              labelId="salary-label"
              as={Select}
              fullWidth
              variant="outlined"
              error={touched.salary && Boolean(errors.salary)}
            >
              <MenuItem value="" disabled>
                Select a salary range
              </MenuItem>
              {salaryOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  ${option.label}
                </MenuItem>
              ))}
            </Field>

            <LocationInput
              value={values.location}
              onChange={(value) => {
                setFieldValue("location", value.value || "");
              }}
              error={touched.location && Boolean(errors.location)}
              helperText={touched.location && errors.location}
            />

            <Button
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              {isEditing ? "Edit" : "Create"} job
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default PostForm;
