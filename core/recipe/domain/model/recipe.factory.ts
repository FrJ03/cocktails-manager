import { RecipeResponse } from "../../dto/response/recipe.response";
import Ingredient from "./ingredient.entity";
import Recipe from "./recipe.entity";
import Step from "./step.entity";
import { StepFactory } from "./step.factory";

export const RecipeFactory = {
    create: (recipe: RecipeResponse): Recipe | undefined => {
        const steps: Array<Step> = []
        const ingredients: Array<Ingredient> = []

        for(let i = 0 ; i < recipe.steps.length ; i++){
            const newStep = StepFactory.create(recipe.steps[i])

            if(newStep !== undefined){
                steps.push(newStep)
            }
            else{
                return undefined
            }
        }
        
        recipe.ingredients.forEach(ingredient => {
            ingredients.push(new Ingredient(
                ingredient.name,
                ingredient.quantity,
                ingredient.units
            ))
        })

        return new Recipe(recipe.name, ingredients, steps)
    }
}