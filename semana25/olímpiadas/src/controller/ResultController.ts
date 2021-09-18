import { Request, Response } from 'express'
import { ResultBusiness } from '../business/ResultBusiness'
import { ResultDatabase } from '../data/ResultDatabase'
import { ResultsInputDTO } from '../model/Result'


const resultBusiness = new ResultBusiness(new ResultDatabase)

export class CompetitionController {

    async create(req: Request, res: Response) {
        try {
            let message = "Success!"
            const { competition, athlete, value, unity } = req.body

            const input: ResultsInputDTO = {
                competition,
                athlete,
                value,
                unity
            }


            await resultBusiness.create(input)

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