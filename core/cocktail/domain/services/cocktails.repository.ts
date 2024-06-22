import { Cocktail } from "../model/cocktail.entity";

export interface Cocktails{
    getAll(): Promise<Array<Cocktail>>
    save(cocktail: Cocktail): Promise<Boolean>
    delete(id: string): Promise<Boolean>
}