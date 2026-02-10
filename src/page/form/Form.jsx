import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Header from "../../components/Header";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phone_number_regex =
  /^(\+\d{1,3})?\s?\(?\d{1,4}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log("Done ");
    handleClick();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Stack direction={"row"} sx={{ gap: 2 }}>
        <TextField
          {...register("firstName", { required: true, maxLength: 20 })}
          sx={{ flex: 1 }}
          id="filled-basic"
          label="Fisrt Name"
          variant="filled"
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName) ? "*This field is required" : null
          }
        />
        <TextField
          sx={{ flex: 1 }}
          id="filled-basic"
          label="Last Name"
          variant="filled"
          {...register("lastName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName) ? "*This field is required" : null
          }
        />
      </Stack>
      <TextField
        {...register("email", { required: true, pattern: regEmail })}
        error={Boolean(errors.email)}
        helperText={
          Boolean(errors.email) ? "* Please provide a valid email" : null
        }
        id="filled-basic"
        label="ُEmail"
        variant="filled"
      />
      <TextField
        {...register("ContactNumber", {
          required: true,
          pattern: phone_number_regex,
        })}
        error={Boolean(errors.ContactNumber)}
        helperText={
          Boolean(errors.ContactNumber)
            ? "* Please provide a valid phone Number"
            : null
        }
        id="filled-basic"
        label="Contact Number"
        variant="filled"
      />
      <TextField id="filled-basic" label="Adress 1" variant="filled" />
      <TextField id="filled-basic" label="Adress 2" variant="filled" />
      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Account created successfuly
        </Alert>
      </Snackbar>
    </Box>
  );
}
