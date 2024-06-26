import { ObjectId } from "mongoose";

export interface RecipeType{
    _id: ObjectId,
    cocktailId: ObjectId,
    name: string,
    ingredients: Array<{
        name: string,
        quantity: number,
        units: string
    }>,
    steps: Array<{
        order: number,
        description: string
    }>
}