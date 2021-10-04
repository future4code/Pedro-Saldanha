export interface PokemonInputDTO {
    type: string | "%",
    weather: string | "%",
    familyId: string | "%",
    size: number | 20
    page: number | 1
}

export class Pokemon {
    constructor(
        private pokedexNumber: number,
        private name: string,
        private generation: number,
        private evolutionStage: string,
        private familyId: string,
        private type1: string,
        private type2: string,
        private weather1: string,
        private weather2: string,
        private statTotal: number,
        private atk: number,
        private def: number,
        private sta: number
    ) { }

    getPokedexNumber(): number {
        return this.pokedexNumber;
    };

    getName(): string {
        return this.name;
    };

    getGeneration(): number {
        return this.generation;
    };

    getEvolutionStage(): string {
        return this.evolutionStage;
    };

    getFamilyId(): string {
        return this.familyId;
    };

    getType1(): string {
        return this.type1
    }

    getType2(): string {
        return this.type2
    }

    getWeather1(): string {
        return this.weather1
    }

    getWeather2(): string {
        return this.weather2
    }

    getStatTotal(): number {
        return this.statTotal
    }

    getAtk(): number {
        return this.atk
    }

    getDef(): number {
        return this.def
    }

    getSta(): number {
        return this.sta
    }

    static toPokemon(data: any): Pokemon {
        return new Pokemon(data.pokedex_number, data.name, data.generation, data.evolution_stage, data.family_id, data.type_1, data.type_2, data.weather_1, data.weather_2, data.stat_total, data.atk, data.def, data.sta);
    };
};