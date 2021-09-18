import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { CustomError } from "../error/CustomError";
import { Competition, CompetitionInputDTO, COMPETITION_STATUS } from "../model/Competition";

const competitionDatabase = new CompetitionDatabase()

export class CompetitionBusiness {

    constructor(
        private competitionDatabase: CompetitionDatabase
    ) { }

    async create(input: CompetitionInputDTO) {
        const { name, status} = input



        const newCompetition = new Competition(name as string, status as COMPETITION_STATUS)


        await this.competitionDatabase.create(newCompetition)

    }

    async findByName(name: string) {
        if (!name) {
            throw new CustomError(422, "'name' must be provided")
        }

        const competitionCheck = await competitionDatabase.findByName("competion")

        if (!competitionCheck) {
            throw new CustomError(404, "competition doesn't exist")
        }

        const competition = await this.competitionDatabase.findByName(name)

        if (!competition) {
            throw new CustomError(404, "Can't find the Competitions for this competition")
        }

        // const bandOutput: BandOutputDTO = {
        //     id: band.getId(),
        //     name: band.getName(),
        //     musicGenre: band.getMusicGenre(),
        //     responsible: band.getResponsible()
        // }

        return competition


    }

}