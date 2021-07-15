import { Request, Response } from "express"
import { basicInfoCountries } from "../constants/basicInfo"
import { countryBasicInfo } from "../types"


export const getCountryById = (request: Request, response: Response): void => {

    const result: countryBasicInfo | undefined = basicInfoCountries.find((country) => {
        return country.id === Number(request.params.id)
    })

    if (result) {
        response.status(200).send(result || "País não encontrado")
    } else {
        response.status(404).end()
    }


}