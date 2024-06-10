import { CocktailResponse } from "../../dto/response/cocktail.response";
import { Cocktail } from "./cocktail.entity";

export const CocktailFactory = {
    create: (cocktail: CocktailResponse): Cocktail => {
        return new Cocktail(cocktail.id, cocktail.name, cocktail.image)
    }
}