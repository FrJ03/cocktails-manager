import { Recipes } from "../domain/services/recipes.repository";
import { GetCocktailRecipesRequest } from "../dto/request/get-cocktail-recipes.request";
import { GetCocktailRecipesResponse } from "../dto/response/get-cocktail-recipes.response";
import { RecipeResponse } from "../dto/response/recipe.response";

export class GetCocktailRecipesUseCase{
    constructor(private readonly recipes: Recipes){}
    async with(request: GetCocktailRecipesRequest): Promise<GetCocktailRecipesResponse>{
        const r = await this.recipes.getAll(request.cocktailId)

        const recipesResponse: Array<RecipeResponse> = []
        r.forEach(recipe => recipesResponse.push(RecipeResponse.fromModel(recipe)))

        return {
            recipes: recipesResponse
        } as GetCocktailRecipesResponse
    }
}
