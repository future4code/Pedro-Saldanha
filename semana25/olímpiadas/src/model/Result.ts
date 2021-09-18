export enum RESULTS_UNITY {
    SECONDS = "s",
    METERS = "m"
}

export interface ResultsInputDTO {
    competition: string | undefined,
    athlete: string | undefined,
    value: number | undefined,
    unity: RESULTS_UNITY | undefined
}

export class Result {
    constructor(
        private competition: string,
        private athlete: string,
        private value: number,
        private unity: RESULTS_UNITY
    ) { }

    getCompetition(): string {
        return this.competition;
    };

    getAthlete(): string {
        return this.athlete;
    };

    getValue(): number {
        return this.value;
    };

    getUnity(): RESULTS_UNITY {
        return this.unity
    }

    setCompetition(newCompetition: string): void {
        this.competition = newCompetition;
    };

    setAthlete(newAthlete: string): void {
        this.athlete = newAthlete;
    };

    setValue(newValue: number): void {
        this.value = newValue;
    };

    setUnity(newUnity: RESULTS_UNITY): void {
        this.unity = newUnity;
    };

    static toResultModel(data: any): Result {
        return new Result(data.competition, data.athlete, data.value, data.unity);
    };
};