import express from "express";
import { PokemonController } from "../controller/PokemonController";

export const pokemonRouter = express.Router()
const pokemonController = new PokemonController()

pokemonRouter.get("/", pokemonController.findPokemon)
pokemonRouter.get("/:name", pokemonController.findByName)
pokemonRouter.get("/pokedex/:pokedexNumber", pokemonController.findByPokedexNumber)
