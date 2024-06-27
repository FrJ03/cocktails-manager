import { FlattenMaps } from "mongoose"
import { RecipeType } from "./recipe.type"
import Recipe from "../../domain/model/recipe.entity"
import Ingredient from "../../domain/model/ingredient.entity"
import { IngredientDataMapper } from "./ingredient.data-mapper"
import Step from "../../domain/model/step.entity"
import { StepDataMapper } from "./step.data-mapper"

const RecipeDataMapper = {
    toModel: (recipe: FlattenMaps<RecipeType>): Recipe => {
        const ingredients: Array<Ingredient> = []
        const steps: Array<Step> = []

        recipe.ingredients.forEach(ingredient => ingredients.push(IngredientDataMapper.toModel(ingredient)))
        recipe.steps.forEach(step => steps.push(StepDataMapper.toModel(step)))

        return new Recipe(
            recipe.name,
            ingredients,
            steps
        )
    }
} as const

export { RecipeDataMapper }