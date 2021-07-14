import { Request, Response } from "express"

export const getAllCountries = (request:Request, response:Response) => {
    response.send("Hello from express")
}