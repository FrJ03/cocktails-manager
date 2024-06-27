import { DeepReadonly } from "ts-essentials";

type GetCocktailRecipesRequest = DeepReadonly<{
    cocktailId: string
}>

export { GetCocktailRecipesRequest }