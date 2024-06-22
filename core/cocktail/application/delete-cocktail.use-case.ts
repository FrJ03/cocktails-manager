import { Cocktails } from "../domain/services/cocktails.repository";
import { DeleteCocktailRequest } from "../dto/request/delete-cocktail.request";

export class DeleteCocktailUseCase{
    constructor(private readonly cocktails: Cocktails) {}

    async with(request: DeleteCocktailRequest): Promise<Boolean>{
        return await this.cocktails.delete(request.id)
    }
}