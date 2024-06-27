import { DeepReadonly } from "ts-essentials";

type GetCocktailRecipeRequest = DeepReadonly<{
    cocktailId: string
}>

export { GetCocktailRecipeRequest }