import { ObjectId } from "mongoose";
import { IngredientType } from "./ingredient.type";
import { StepType } from "./step.type";

export interface RecipeType{
    _id: ObjectId,
    cocktailId: ObjectId,
    name: string,
    ingredients: Array<IngredientType>,
    steps: Array<StepType>
}