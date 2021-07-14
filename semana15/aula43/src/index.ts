import { app } from "./app";
import { getAllCountries } from "./endpoints/getAllCountries";

app.get("/countries", getAllCountries)