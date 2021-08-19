import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export async function createRecipe(req: Request, res: Response) {
    try {
        const { title, description } = req.body

        const token = req.headers.authorization

        if (!token) {
            res.status(422)
            throw new Error("Esse endpoint exige uma autorização passada nos headers")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if (!title || !description) {
            res.status(422)
            throw new Error("'title' e 'description' devem ser preenchidos.")
        }


        if (title.length < 6) {
            res.status(422)
            throw new Error("'title' deve ter ao menos 6 caracteres");
        }

        if (description.length < 15) {
            res.status(422)
            throw new Error("'description' deve ter ao menos 15 caracteres");
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const date = new Date().toLocaleDateString('pt-BR')

        const newRecipe = new Recipe(id, title, description, date)
        const recipeDatabase = new RecipeDatabase()

        await recipeDatabase.createRecipe(newRecipe)

        res.status(200).send({ message: "Receita criada com sucesso." })
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}