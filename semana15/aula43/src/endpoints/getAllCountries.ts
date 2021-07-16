import { Request, Response } from "express"
import { basicInfoCountries } from "../constants/basicInfo"

export const getAllCountries = (request: Request, response: Response) => {
    response.status(200).send(basicInfoCountries)
}