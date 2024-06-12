import { Cocktails } from "../domain/services/cocktails.repository";
import { GetCocktailsResponse } from "../dto/response/get-cocktails.response";

export class GetCocktailsUseCase{
    constructor(private readonly cocktails: Cocktails) {}

    async with(): Promise<GetCocktailsResponse>{
        const cocktails = await this.cocktails.getAll()

        return GetCocktailsResponse.fromModel(cocktails)
    }
}