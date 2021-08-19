import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getRecipeById(req: Request, res: Response) {
    try {
        const token = req.headers.authorization

        if (!token) {
            res.status(422)
            throw new Error("Esse endpoint exige uma autorização passada nos headers")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const id = req.params.id

        if (!id) {
            res.status(422)
            throw new Error("É necessário passar o Id da receita desejada como parâmetro")
        }

        const recipeDatabase = new RecipeDatabase()
        const recipe = await recipeDatabase.getRecipeById(id)

        if (!recipe) {
            res.status(422)
            throw new Error("Receita não encontrada")
        }

        res.status(200).send({ id: recipe.getId(), title: recipe.getTitle(), description: recipe.getDescription() })
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}