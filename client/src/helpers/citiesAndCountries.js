import { CountryRegionData } from "react-country-region-selector";

const countries = CountryRegionData.map(
  ([country_name, country_code, cities]) => ({
    country_name,
    country_code,
    cities: cities
      .split("|")
      .map((cityData) => cityData.split("~"))
      .map(([city_name, city_code]) => ({ city_name, city_code })),
  })
);

export const options = [];
countries.forEach((country) => {
  country.cities.forEach((city) => {
    options.push({
      label: `${city.city_name}, ${country.country_name}`,
      value: `${city.city_name}, ${country.country_name}`,
    });
  });
});
