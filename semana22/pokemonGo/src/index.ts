import { app } from "./data/app";
import { pokemonRouter } from "./routes/pokemonRouter";

app.use("/pokemon", pokemonRouter)