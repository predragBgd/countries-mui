import { TextField } from "@mui/material";

export default function SelectCountry(props) {
  return (
    <TextField
      id="outlined-basic"
      label="Search Country"
      variant="outlined"
      onChange={(e) => props.setSearch(e.target.value)}
    />
  );
}
