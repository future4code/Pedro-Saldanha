import { Pokemon } from "../model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";


export class PokemonDatabase extends BaseDatabase {
    private static TABLE_NAME = "pokemon_go"

    public async findPokemonByName(name: string): Promise<Pokemon> {

        const pokemon = await BaseDatabase.connection(PokemonDatabase.TABLE_NAME)
            .select('*')
            .where({ name: name })

        return pokemon[0] && pokemon[0]
    }

    // public async findPokemonByName(name: string): Promise<Pokemon[]> {

    //     const pokemon = await BaseDatabase.connection(PokemonDatabase.TABLE_NAME)
    //         .select('*')
    //         .where({ name: name })

    //     return pokemon.map((poke) => Pokemon.toPokemon(poke));
    // }
}
