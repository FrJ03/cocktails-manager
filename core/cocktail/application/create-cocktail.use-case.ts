import { Cocktail } from "../domain/model/cocktail.entity";
import { CocktailFactory } from "../domain/model/cocktail.factory";
import { Cocktails } from "../domain/services/cocktails.repository";
import { CreateCocktailRequest } from "../dto/request/create-cocktail.request";

export class CreateCocktailUseCase{
    constructor(private readonly cocktails: Cocktails) {}

    async with(cocktailData: CreateCocktailRequest): Promise<Boolean>{
        const cocktail = Cocktail.create('1', cocktailData.name, cocktailData.image)
        if(cocktail !== undefined){
            return await this.cocktails.save(cocktail)
        }
        else{
            return false
        }
    }
}