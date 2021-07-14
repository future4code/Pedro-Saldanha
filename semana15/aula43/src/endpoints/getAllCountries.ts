import { Request, Response } from "express"
import { countries } from "../data"

const basicInfoCountries = countries.map((country) => {
    return {
        id: country.id,
        name: country.name
    }
})


export const getAllCountries = (request: Request, response: Response) => {
    response.send(basicInfoCountries)
}