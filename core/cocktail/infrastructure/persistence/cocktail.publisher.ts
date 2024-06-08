import mongoose from "mongoose";
import { CocktailType } from "./cocktail.type";

const CocktailSchema = new mongoose.Schema({
    name: String,
    image: String
})

const CocktailMongoPublisher = mongoose.model<CocktailType>('Cocktail', CocktailSchema)

export {CocktailMongoPublisher, CocktailSchema}