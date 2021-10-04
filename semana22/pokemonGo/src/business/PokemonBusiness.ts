import { PokemonDatabase } from "../data/PokemonDatabase";
import { CustomError } from "../error/CustomError";
import { PokemonInputDTO } from "../model/Pokemon";


export class PokemonBusiness {
    constructor(
        public pokemonDatabase: PokemonDatabase
    ) { }

    async findPokemon(input: PokemonInputDTO) {

        const offset = input.size * (input.page - 1)

        const pokemon = await this.pokemonDatabase.findPokemon(input, offset)

        if (!pokemon) {
            throw new CustomError(404, "pokemon not found")
        }

        return pokemon
    }

    async findByName(name: string) {

        if (!name) {
            throw new CustomError(422, "'name' must be provided")
        }

        const pokemon = await this.pokemonDatabase.findByName(name)

        if (!pokemon) {
            throw new CustomError(404, "pokemon not found")
        }

        return pokemon
    }

    async findByPokedexNumber(pokedexNumber: number) {

        if (!pokedexNumber) {
            throw new CustomError(422, "'pokedexNumber' must be provided")
        }

        const pokemon = await this.pokemonDatabase.findByPokedexNumber(pokedexNumber)

        if (!pokemon) {
            throw new CustomError(404, "pokemon not found")
        }

        return pokemon
    }

}