import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { ResultDatabase } from "../data/ResultDatabase";
import { CustomError } from "../error/CustomError";
import { Result, ResultInputDTO, ResultOutputDTO, RESULT_UNITY } from "../model/Result";

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

    async findRank(competition: string) {
        if (!competition) {
            throw new CustomError(422, "'competition' must be provided")
        }

        const competitionCheck = await competitionDatabase.findByName(competition)

        if (!competitionCheck) {
            throw new CustomError(422, "competition doesn't exist")
        }

        const tempResult = await this.resultDatabase.findRank(competition)

        if (tempResult && !tempResult[0]) {
            throw new CustomError(404, "Can't find registered results for this competition")
        }

        let order = ""

        if (tempResult && tempResult[0].getUnity() === "m") {

            // tempResult.sort(function (a, b) {
            //     return a.getAthlete().localeCompare(b.getAthlete())
            // })

            // let result = []

            // let higherResult: Result = tempResult[0];

            // for (let i = 0; i < tempResult.length; i++) {
            //     let j = 1
            //     if (tempResult[i].getAthlete() === tempResult[j].getAthlete()) {
            //         if (tempResult[j].getValue() > higherResult.getValue()) {
            //             higherResult = tempResult[j]
            //         }
            //         console.log(higherResult)
            //     }

            //     if (tempResult[i].getAthlete() !== tempResult[j].getAthlete()) {
            //         result.push(higherResult)
            //         higherResult = tempResult[j]
            //     }
            // }

            return tempResult
        } else if (tempResult && tempResult[0].getUnity() === "s") {
            order = "ASC"
        }

        const result = await this.resultDatabase.findRank(competition, order)

        return result

    }

}