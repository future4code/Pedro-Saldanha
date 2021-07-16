import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"


export const getCountryById = (request: Request, response: Response): void => {

    const result: country | undefined = countries.find((country) => {
        return country.id === Number(request.params.id)
    })

    if (result) {
        response.status(200).send(result)
    } else {
        response.status(404).send("País não encontrado")
    }
}