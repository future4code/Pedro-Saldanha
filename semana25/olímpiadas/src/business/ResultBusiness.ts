import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { ResultDatabase } from "../data/ResultDatabase";
import { CustomError } from "../error/CustomError";
import { Result, ResultInputDTO, RESULT_UNITY } from "../model/Result";

const competitionDatabase = new CompetitionDatabase()

export class ResultBusiness {
    constructor(
        private resultDatabase: ResultDatabase
    ) { }

    async register(input: ResultInputDTO) {
        const { competition, athlete, value, unity } = input

        if (!competition || !athlete || !value || !unity) {
            throw new CustomError(422, "'competition', 'athlete', 'value' and 'unity' must be provided")
        }

        const competitionCheck = await competitionDatabase.findByName(competition)

        if (!competitionCheck) {
            throw new CustomError(422, "competition doesn't exist")
        }

        if (competitionCheck.getStatus() === "finalizada") {
            throw new CustomError(422, "competition already finished")
        }

        const newResult = new Result(competition, athlete, value, unity)


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