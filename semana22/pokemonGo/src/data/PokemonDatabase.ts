import { Pokemon, PokemonInputDTO } from "../model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";


export class PokemonDatabase extends BaseDatabase {
    private static TABLE_NAME = "pokemon_go"

    public async findPokemon(input: PokemonInputDTO, offset: number): Promise<Pokemon[]> {

        const pokemon = await BaseDatabase.connection.raw(`select * from ${PokemonDatabase.TABLE_NAME}
        WHERE (type_1 LIKE "%${input.type}%" or type_2 LIKE "%${input.type}%") 
        and (weather_1 LIKE "%${input.weather}%" or weather_2 LIKE "%${input.weather}%") 
        and (family_id LIKE "${input.familyId}")
        ORDER BY pokedex_number
        LIMIT ${input.size} OFFSET ${offset};`)

        return pokemon[0][0] && pokemon[0].map((poke: any) => Pokemon.toPokemon(poke));
    }

    public async findByName(name: string): Promise<Pokemon | undefined> {

        const pokemon = await BaseDatabase.connection(PokemonDatabase.TABLE_NAME)
            .select('*')
            .where({ name: name })

        return pokemon[0] && pokemon[0]
    }

    public async findByPokedexNumber(pokedexNumber: number): Promise<Pokemon> {

        const pokemon = await BaseDatabase.connection(PokemonDatabase.TABLE_NAME)
            .select('*')
            .where({ pokedex_number: pokedexNumber })

        return pokemon[0] && pokemon[0]
    }

}
