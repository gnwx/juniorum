import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { options } from "../helpers/citiesAndCountries";

const LocationInput = ({ value, onChange, error, helperText }) => {
  return (
    <Autocomplete
      value={value || ""}
      freeSolo
      options={options}
      onChange={(event, value) => {
        onChange(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Job location"
          variant="outlined"
          fullWidth
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
};

export default LocationInput;
