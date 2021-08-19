import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public createRecipe = async (recipe: Recipe) => {
        await BaseDatabase.connection
            .insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                createdAt: recipe.getDate(),
            })
            .into('cookenu_recipe');
    };

    public async getRecipeById(id:string): Promise<Recipe> {
        const recipe = await BaseDatabase.connection('cookenu_recipe')
            .select('*')
            .where({ id: id })

        return recipe[0] && Recipe.toRecipe(recipe[0]);
    }
}