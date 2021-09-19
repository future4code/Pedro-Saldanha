import { Request, Response } from 'express'
import { ResultBusiness } from '../business/ResultBusiness'
import { ResultDatabase } from '../data/ResultDatabase'
import { ResultInputDTO } from '../model/Result'


const resultBusiness = new ResultBusiness(new ResultDatabase)

export class ResultController {

    async register(req: Request, res: Response) {
        try {
            let message = "Result registered"
            const { competition, athlete, value, unity } = req.body

            const input: ResultInputDTO = {
                competition,
                athlete,
                value: Number(value),
                unity
            }


            await resultBusiness.register(input)

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