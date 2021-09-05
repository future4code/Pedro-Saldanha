import { Request, Response } from 'express'
import { PokemonBusiness } from '../business/PokemonBusiness'
import { PokemonDatabase } from '../data/PokemonDatabase'
import { PokemonInputDTO } from '../model/Pokemon'

const pokemonBusiness = new PokemonBusiness(new PokemonDatabase())

export class PokemonController {

    async findPokemon(req: Request, res: Response) {
        try {

            const type = req.query.type ? req.query.type as string : "%"
            const weather = req.query.weather ? req.query.weather as string : "%"
            const familyId = req.query.familyId ? req.query.familyId as string : "%"

            const size = req.query.size ? Number(req.query.size) : 20
            const page = req.query.page ? Number(req.query.page) : 1

            const input: PokemonInputDTO = {
                type,
                weather,
                familyId,
                size,
                page
            }


            const pokemon = await pokemonBusiness.findPokemon(input)

            res.status(200).send({ pokemon })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.code || 400).send({ message })
        }
    }

    async findByName(req: Request, res: Response) {
        try {
            let name = req.params.name

            const pokemon = await pokemonBusiness.findByName(name)

            res.status(200).send({ pokemon })

        } catch (error:any) {
            let message = error.sqlMessage || error.message
            res.status(error.code || 400).send({ message })
        }
    }

    async findByPokedexNumber(req: Request, res: Response) {
        try {
            let pokedexNumber = Number(req.params.pokedexNumber)

            const pokemon = await pokemonBusiness.findByPokedexNumber(pokedexNumber)

            res.status(200).send({ pokemon })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.code || 400).send({ message })
        }
    }
}