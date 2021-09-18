import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { ResultDatabase } from "../data/ResultDatabase";
import { CustomError } from "../error/CustomError";
import { Result, ResultsInputDTO, RESULTS_UNITY } from "../model/Result";

const competitionDatabase = new CompetitionDatabase()

export class ResultBusiness {
    constructor(
        private resultDatabase: ResultDatabase
    ) { }

    async create(input: ResultsInputDTO) {
        const { competition, athlete, value, unity } = input



        const newResult = new Result(competition as string, athlete as string, value as number, unity as RESULTS_UNITY)


        await this.resultDatabase.create(newResult)

    }

    async findPositionByCompetition(competition: string, token?: string) {
        if (!competition) {
            throw new CustomError(422, "'competition' must be provided")
        }

        const competitionCheck = await competitionDatabase.findByName("competion")

        if (!competitionCheck) {
            throw new CustomError(404, "competition doesn't exist")
        }

        const result = await this.resultDatabase.findPositionByCompetition("competion", "order")

        if (!result) {
            throw new CustomError(404, "Can't find the results for this competition")
        }

        // const bandOutput: BandOutputDTO = {
        //     id: band.getId(),
        //     name: band.getName(),
        //     musicGenre: band.getMusicGenre(),
        //     responsible: band.getResponsible()
        // }

        return result


    }

}