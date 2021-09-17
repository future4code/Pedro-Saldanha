import { PokemonBusiness } from "../src/business/PokemonBusiness"
import { PokemonDatabase } from "../src/data/PokemonDatabase";
import { PokemonDatabaseMock } from "./mocks/PokemonDatabaseMock";
import { FirePokemonInputDTOMock, GrassPokemonInputDTOMock, UndefinedPokemonInputDTOMock } from "./mocks/PokemonMock";

const pokemonBusinessMock = new PokemonBusiness(
    new PokemonDatabaseMock() as PokemonDatabase
)
describe("Testing finding pokemon with type filter", () => {

    test("Must return error when type doesn't exist", async () => {
        expect.assertions(2);
        try {

            await pokemonBusinessMock.findPokemon(UndefinedPokemonInputDTOMock);

        } catch (error: any) {

            expect(error.message).toEqual("pokemon not found");
            expect(error.code).toBe(404);

        }
    });

    test("Success searching by grass type", async () => {
        try {

            await pokemonBusinessMock.findPokemon(GrassPokemonInputDTOMock);

        } catch (error: any) {

            expect(error.message).not.toEqual("pokemon not found");
            expect(error.code).not.toBe(404);

        }
    });

    test("Success searching by fire type", async () => {
        try {

            await pokemonBusinessMock.findPokemon(FirePokemonInputDTOMock);

        } catch (error: any) {

            expect(error.message).not.toEqual("pokemon not found");
            expect(error.code).not.toBe(404);

        }
    });

})

describe("Testing finding pokemon by name", () => {

    test("Must return error when name doesn't exist", async () => {
        expect.assertions(2);
        try {

            await pokemonBusinessMock.findByName("asd");

        } catch (error: any) {

            expect(error.message).toEqual("pokemon not found");
            expect(error.code).toBe(404);

        }
    });

    test("Success searching by name", async () => {
        try {

            await pokemonBusinessMock.findByName("GrassPokemon");

        } catch (error: any) {

            expect(error.message).not.toEqual("pokemon not found");
            expect(error.code).not.toBe(404);

        }
    });

})

describe("Testing finding pokemon by pokedex number", () => {

    test("Must return error when name doesn't exist", async () => {
        expect.assertions(2);
        try {

            await pokemonBusinessMock.findByPokedexNumber(803);

        } catch (error: any) {

            expect(error.message).toEqual("pokemon not found");
            expect(error.code).toBe(404);

        }
    });

    test("Success searching by pokedex number", async () => {
        try {

            await pokemonBusinessMock.findByPokedexNumber(1);

        } catch (error: any) {

            expect(error.message).not.toEqual("pokemon not found");
            expect(error.code).not.toBe(404);

        }
    });
})