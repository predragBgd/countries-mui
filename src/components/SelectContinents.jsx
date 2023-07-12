import { Autocomplete, TextField } from "@mui/material";

export default function SelectContinents(props) {
  const continents = ["Americas", "Europe", "Africa", "Asia", "Oceania"];

  return (
    <Autocomplete
      options={continents}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Continent"
          onSelect={(e) => {
            props.setContinent(e.target.value);
          }}
        />
      )}
    />
  );
}
