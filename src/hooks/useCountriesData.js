import { useQuery } from "react-query";
import Axios from "axios";

const fetchCountries = async () => {
  const res = await Axios.get("https://restcountries.com/v3.1/all");
  return res.data;
};

export const useCountriesData = () => {
  return useQuery(["countries"], fetchCountries);
};
