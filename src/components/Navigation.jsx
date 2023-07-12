import { Button, Link } from "@mui/material";
import { Route, Link as RouterLink, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Countries from "../pages/Countries";
import Country from "../pages/Country";

export default function Navigation() {
  return (
    <div>
      <nav>
        <Link component={RouterLink} to="/">
          <Button>Home</Button>
        </Link>
        <Link component={RouterLink} to="/countries">
          <Button>Countries</Button>
        </Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:countryName" element={<Country />} />
        </Routes>
      </nav>
    </div>
  );
}
