import { DeepReadonly } from "ts-essentials";
import { RecipeResponse } from "./recipe.response";

type GetCocktailRecipesResponse = DeepReadonly<{
    recipes: Array<RecipeResponse>
}>

export { GetCocktailRecipesResponse }