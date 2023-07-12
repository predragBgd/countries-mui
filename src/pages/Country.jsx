import { useParams } from "react-router";
import { useCountryData } from "../hooks/useCountryData";
import {
  Box,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Table,
  Grid,
  Typography,
} from "@mui/material";

export default function Country() {
  const { countryName } = useParams();
  const { data, isLoading, isError, error } = useCountryData(countryName);
  console.log(data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} my={6}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <Typography variant="h5">
                        {"Basic information about " + data[0]?.name.common}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={2}>Names</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Oficial name</TableCell>
                    <TableCell>{data[0]?.name.official}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Local name</TableCell>
                    <TableCell>{data[0]?.altSpellings[1]}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Geography</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Region</TableCell>
                    <TableCell>{data[0]?.region}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Subregion</TableCell>
                    <TableCell>{data[0]?.subregion}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Capital City</TableCell>
                    <TableCell>{data[0]?.capital}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Area</TableCell>
                    <TableCell>{data[0]?.area} km</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Population</TableCell>
                    <TableCell>{data[0]?.population}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Borders</TableCell>
                    <TableCell>{data[0]?.borders?.toString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Time Zone</TableCell>
                    <TableCell>{data[0]?.timezones}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            mt={6}
            display="flex"
            justifyContent="center"
            alignItems="start"
            // sx={boxDefault}
          >
            <Box
              component="img"
              src={data[0]?.coatOfArms.png}
              alt={data[0]?.name.common + " Coat of arms"}
              sx={{ minWidth: 250, maxWidth: 250 }}
            ></Box>
          </Grid>
        </Grid>

        <TableContainer sx={{ width: 500 }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead></TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* <p>{data[0]?.tld}</p>

      <br />
      <img
        src={data[0]?.coatOfArms.pngv}
        alt={data[0]?.name.common + " Coat of arms"}
      />
      <p>{data[0]?.borders}</p>
      <p>{data[0]?.translations.ara.official}</p>
      <p>{data[0]?.flag}</p> */}
    </>
  );
}
