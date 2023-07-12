import { Box } from "@mui/system";
import { Masonry } from "@mui/lab";
import { useCountriesData } from "../hooks/useCountriesData";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SelectCountry from "../components/SelectCountry";
import SelectContinents from "../components/SelectContinents";

export default function Countries() {
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("");
  console.log(search);
  const { data, isLoading, isError, error } = useCountriesData();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        my={2}
      >
        <Grid item xs={12} md={6}>
          <SelectContinents setContinent={setContinent} />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectCountry setSearch={setSearch} />
        </Grid>
      </Grid>
      <Box xs={{ width: 500, minHeight: 829 }}>
        <Masonry columns={4} spacing={2}>
          {data
            ?.filter((country) => {
              return search.toLowerCase() === ""
                ? country
                : country.name.common.toLowerCase().includes(search);
            })
            .filter((country) => {
              return continent === ""
                ? country
                : country.region.includes(continent);
            })
            .map((country, index) => {
              return (
                <CardActionArea
                  href={`/countries/${country.name.common}`}
                  key={index}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      image={country.flags.png}
                      alt={country.flags.alt}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {country.name.common}
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              );
            })}
        </Masonry>
      </Box>
    </>
  );
}
