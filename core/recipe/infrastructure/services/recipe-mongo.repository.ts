import { NotFoundError } from "../../../commons/domain/errors/not-found-error";
import Recipe from "../../domain/model/recipe.entity";
import { Recipes } from "../../domain/services/recipes.repository";
import { RecipeDataMapper } from "../persistence/recipe.data-mapper";
import { RecipeMongoPublisher } from "../persistence/recipe.publisher";

export class RecipeMongo implements Recipes {
    async getAll(cocktailId: string): Promise<Array<Recipe>>{
        try{
            const recipes = await RecipeMongoPublisher.find({cocktailId: cocktailId}).lean()
            const RecipesArray: Array<Recipe> = []
            recipes.forEach(recipe => RecipesArray.push(RecipeDataMapper.toModel(recipe)))
            return RecipesArray
        }
        catch{
            throw new NotFoundError('cocktails_database_error')
        }
    }
}