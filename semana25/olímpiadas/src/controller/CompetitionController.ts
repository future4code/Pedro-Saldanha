import { Request, Response } from 'express'
import { CompetitionBusiness } from '../business/CompetitionBusiness'
import { CompetitionDatabase } from '../data/CompetitionDatabase'
import { CompetitionInputDTO } from '../model/Competition'

const competitionBusiness = new CompetitionBusiness(new CompetitionDatabase)

export class CompetitionController {

    async create(req: Request, res: Response) {
        try {
            let message = "Success!"
            const { name, status } = req.body

            const input: CompetitionInputDTO = {
                name,
                status
            }


            await competitionBusiness.create(input)

            res.status(201).send({ message })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.code || 400).send({ message })
        }
    }

    async findByName(req: Request, res: Response) {
        try {
            let message = "Success!"



            res.status(201).send({ message })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.code || 400).send({ message })
        }
    }

}