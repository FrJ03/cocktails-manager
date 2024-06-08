import { ObjectId } from "mongoose";

export interface CocktailType{
    _id: ObjectId,
    name: string,
    image: string
}