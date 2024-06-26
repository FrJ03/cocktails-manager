import mongoose from "mongoose";
import { RecipeType } from "./recipe.type";

const RecipeSchema = new mongoose.Schema({
    cocktailId: mongoose.Types.ObjectId,
    name: String,
    ingredients: Array<{
        name: String,
        quantity: number,
        units: String
    }>,
    steps: Array<{
        order: number,
        description: String
    }>
})

const RecipeMongoPublisher = mongoose.model<RecipeType>('Recipe', RecipeSchema)

export {RecipeMongoPublisher, RecipeSchema}