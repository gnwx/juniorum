import React, { useState } from "react";

//mui elements
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//icons
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { signupValidation } from "../helpers/signupValidation";

import { useSignup } from "../hooks/useSignup";
import { useConvertToBase64 } from "../hooks/useConvertToBase64";

const SignupForm = () => {
  const { signup, isLoading, error } = useSignup();
  const { convertToBase64, photoBase64 } = useConvertToBase64();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        description: "",
        employees: "",
        location: "",
        link: "",
        photo: null,
      }}
      validationSchema={signupValidation}
      onSubmit={(values, { resetForm }) => {
        const updatedValues = {
          ...values,
          photo: photoBase64,
        };
        signup(updatedValues);
        resetForm();
      }}
    >
      {({ errors, touched, getFieldProps, setFieldValue }) => (
        <Form>
          <TextField
            {...getFieldProps("name")}
            label="Company Name*"
            variant="outlined"
            fullWidth
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />

          <TextField
            {...getFieldProps("email")}
            label="Contact Email*"
            variant="outlined"
            fullWidth
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            {...getFieldProps("password")}
            label="Password*"
            variant="outlined"
            type="password"
            fullWidth
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />

          <TextField
            {...getFieldProps("description")}
            multiline
            rows={5}
            label="Description*"
            variant="outlined"
            fullWidth
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
          />

          <Slider
            {...getFieldProps("employees")}
            value={Number(getFieldProps("employees").value)}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={100}
          />

          <TextField
            {...getFieldProps("location")}
            label="Location*"
            variant="outlined"
            fullWidth
            error={touched.location && Boolean(errors.location)}
            helperText={touched.location && errors.location}
          />
          <TextField
            {...getFieldProps("link")}
            label="LinkedIn or website"
            variant="outlined"
            fullWidth
            error={touched.link && Boolean(errors.link)}
            helperText={touched.link && errors.link}
          />
          <Field name="photo">
            {({ field }) => (
              <div>
                <input
                  accept="image/*"
                  type="file"
                  id="photo-input"
                  hidden
                  onChange={(event) => {
                    convertToBase64(event);
                    setFieldValue("photo", event.currentTarget.files[0]);
                  }}
                />
                <label htmlFor="photo-input">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
                {errors.photo && touched.photo && (
                  <div className="error">{errors.photo}</div>
                )}
              </div>
            )}
          </Field>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            Sign up!
          </Button>

          {error && <div>{error} </div>}
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
