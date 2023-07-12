import { useQuery } from "react-query";
import Axios from "axios";

const fetchCountry = async (countryName) => {
  const res = await Axios.get(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  return res.data;
};

export const useCountryData = (countryName) => {
  return useQuery(["country", countryName], () => fetchCountry(countryName));
};
