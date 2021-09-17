import { Pokemon, PokemonInputDTO } from "../../src/model/Pokemon";

export const GrassPokemonInputDTOMock: PokemonInputDTO = {
    type: "grass" ,
    weather: "sunny" ,
    familyId: "1" ,
    size: 10 | 20,
    page: 1 | 1
}

export const FirePokemonInputDTOMock: PokemonInputDTO = {
    type: "Fire" ,
    weather: "sunny" ,
    familyId: "1" ,
    size: 10 | 20,
    page: 1 | 1
}

export const UnfilteredPokemonInputDTOMock: PokemonInputDTO = {
    type: "%" ,
    weather: "&" ,
    familyId: "%" ,
    size: 10 | 20,
    page: 1 | 1
}

export const UndefinedPokemonInputDTOMock: PokemonInputDTO = {
    type: "" ,
    weather: "" ,
    familyId: "" ,
    size: 10 | 20,
    page: 1 | 1
}


export const pokemonMockGrass = new Pokemon(
    1,
    "GrassPokemon",
    1,
    "1",
    "1",
    "grass",
    "poison",
    "Rainy",
    "Cloudy",
    326,
    118,
    118,
    90,
)

export const pokemonMockGrass2 = new Pokemon(
    2,
    "GrassPokemon2",
    1,
    "1",
    "1",
    "grass",
    "poison",
    "Rainy",
    "Cloudy",
    326,
    118,
    118,
    90,
)

export const pokemonMockFire = new Pokemon(
    6,
    "FirePokemon",
    1,
    "3",
    "2",
    "fire",
    "flying",
    "Sunny/clear",
    "windy",
    555,
    223,
    176,
    156,
)

export const pokemonMockFire2 = new Pokemon(
    7,
    "FirePokemon2",
    1,
    "3",
    "2",
    "fire",
    "flying",
    "Sunny/clear",
    "windy",
    555,
    223,
    176,
    156,
)

export const pokemonArrayMock: Pokemon[] = [
    pokemonMockGrass, pokemonMockFire
]

export const grassPokemonArrayMock: Pokemon[] = [
    pokemonMockGrass, pokemonMockGrass2
]

export const firePokemonArrayMock: Pokemon[] = [
    pokemonMockFire, pokemonMockFire2
]