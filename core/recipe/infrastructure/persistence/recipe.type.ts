import { ObjectId } from "mongoose";
import { IngredientType } from "./ingredient.type";

export interface RecipeType{
    _id: ObjectId,
    cocktailId: ObjectId,
    name: string,
    ingredients: Array<IngredientType>,
    steps: Array<{
        order: number,
        description: string
    }>
}