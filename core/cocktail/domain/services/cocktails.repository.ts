import { Cocktail } from "../model/cocktail.entity";

export interface Cocktails{
    getAll(): Promise<Array<Cocktail>>
}