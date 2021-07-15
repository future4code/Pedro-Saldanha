import { app } from "./app";
import { getAllCountries } from "./endpoints/getAllCountries";
import { getCountryById } from "./endpoints/getCountryById";
import { searchCountry } from "./endpoints/searchCountry";

app.get("/countries", getAllCountries)
app.get("/countries/search", searchCountry)
app.get("/countries/:id", getCountryById)
