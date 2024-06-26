import { DeepReadonly } from "ts-essentials";
import { StepResponse } from "./step.response";
import { IngredientResponse } from "./ingredient.response";

type RecipeResponse = DeepReadonly<{
    name: string,
    ingredients: Array<IngredientResponse>
    steps: Array<StepResponse>
}>

export { RecipeResponse }