import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box>
      <Typography variant="h3">Countrys data</Typography>
      <Typography variant="subtitle1">
        Using the{" "}
        <Link to="https://restcountries.com/" target="_blank">
          <Button variant="text" size="small">
            REST COUNTRIES API
          </Button>
        </Link>
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="600"
          image="https://www.telegraph.co.uk/content/dam/Travel/2017/February/new-flags.jpg?imwidth=960"
          alt="Flags"
        />
      </Card>
    </Box>
  );
}
