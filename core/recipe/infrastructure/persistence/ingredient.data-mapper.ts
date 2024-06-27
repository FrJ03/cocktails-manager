import { FlattenMaps } from "mongoose"
import Ingredient from "../../domain/model/ingredient.entity"
import { IngredientType } from "./ingredient.type"

const IngredientDataMapper = {
    toModel: (ingredient: FlattenMaps<IngredientType>): Ingredient => 
        new Ingredient(
            ingredient.name,
            ingredient.quantity,
            ingredient.units
        )
} as const

export { IngredientDataMapper }