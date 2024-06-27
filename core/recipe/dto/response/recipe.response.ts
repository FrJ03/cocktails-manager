import { DeepReadonly } from "ts-essentials";
import { StepResponse } from "./step.response";
import { IngredientResponse } from "./ingredient.response";
import Recipe from "../../domain/model/recipe.entity";

type RecipeResponse = DeepReadonly<{
    name: string,
    ingredients: Array<IngredientResponse>
    steps: Array<StepResponse>
}>

const RecipeResponse = {
    fromModel: (recipe: Recipe): RecipeResponse => {
        const ingredients: Array<IngredientResponse> = []
        const steps: Array<StepResponse> = []

        recipe.ingredients.forEach(ingredient => ingredients.push(IngredientResponse.fromModel(ingredient)))
        recipe.steps.forEach(step => steps.push(StepResponse.fromModel(step)))

        return {
            name: recipe.name,
            ingredients: ingredients,
            steps: steps
        } as Recipe
    }
}

export { RecipeResponse }