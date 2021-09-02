import { Request, Response } from 'express'
import { PokemonDatabase } from '../data/PokemonDatabase'

const pokemonDatabase = new PokemonDatabase()

export class PokemonController {

    async findByName(req: Request, res: Response) {
        try {
        
            const pokemon = await pokemonDatabase.findPokemonByName("bulbasaur")

            res.status(200).send({ pokemon})

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.code || 400).send({ message })
        }
    }

}