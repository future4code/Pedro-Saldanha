import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"


export const searchCountry = (request: Request, response: Response): void => {
    let filteredCountries: country[] = countries

    if (request.query.name) {
        filteredCountries = filteredCountries.filter((country) => country.name.toLocaleLowerCase().includes((request.query.name as string).toLocaleLowerCase()))
    }

    if (request.query.continent) {
        filteredCountries = filteredCountries.filter((country) => country.continent.toLocaleLowerCase().includes((request.query.continent as string).toLocaleLowerCase()))
    }

    if (request.query.capital) {
        filteredCountries = filteredCountries.filter((country) => country.capital.toLocaleLowerCase().includes((request.query.capital as string).toLocaleLowerCase()))
    }

    if (!request.query.name && !request.query.capital && !request.query.continent) {
        response.status(400).send("Parâmetros Inválidos")
    }
    response.status(200).send(filteredCountries)
}

// sintaxe com try catch:
  // try {
    //     if (!request.query.name && !request.query.capital && !request.query.continent) {
    //         throw new Error("Parâmetros Inválidos");
    //     }

    //     if (request.query.name) {
    //         filteredCountries = filteredCountries.filter((country) => country.name.toLocaleLowerCase().includes((request.query.name as string).toLocaleLowerCase()));
    //     }

    //     if (request.query.continent) {
    //         filteredCountries = filteredCountries.filter((country) => country.continent.toLocaleLowerCase().includes((request.query.continent as string).toLocaleLowerCase()));
    //     }

    //     if (request.query.capital) {
    //         filteredCountries = filteredCountries.filter((country) => country.capital.toLocaleLowerCase().includes((request.query.capital as string).toLocaleLowerCase()));
    //     }
    //     response.status(200).send(filteredCountries)

    // } catch (error) {
    //     response.status(400).send(error.message)
    // }