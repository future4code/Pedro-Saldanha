import { Pokemon, PokemonInputDTO } from "../../src/model/Pokemon";
import { GrassPokemonInputDTOMock, pokemonMockGrass, FirePokemonInputDTOMock, pokemonMockFire, pokemonArrayMock, firePokemonArrayMock, grassPokemonArrayMock, UnfilteredPokemonInputDTOMock } from "./PokemonMock";

export class PokemonDatabaseMock {
    public async findPokemon(input: PokemonInputDTO, offset: number): Promise<Pokemon[] | undefined> {
        switch (input) {
            case GrassPokemonInputDTOMock:
                return grassPokemonArrayMock
            case FirePokemonInputDTOMock:
                return firePokemonArrayMock
            case UnfilteredPokemonInputDTOMock:
                return pokemonArrayMock
            default:
                return undefined
        }
    }

    public async findByName(name: string): Promise<Pokemon | undefined> {

        switch (name) {
            case pokemonMockGrass.getName():
                return pokemonArrayMock[0]
            case pokemonMockFire.getName():
                return pokemonArrayMock[1]
            default:
                return undefined
        }
    }

    public async findByPokedexNumber(pokedexNumber: number): Promise<Pokemon | undefined> {

        switch (pokedexNumber) {
            case pokemonMockGrass.getPokedexNumber():
                return pokemonArrayMock[0]
            case pokemonMockFire.getPokedexNumber():
                return pokemonArrayMock[1]
            default:
                return undefined
        }
    }
}