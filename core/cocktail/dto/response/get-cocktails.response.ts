import { DeepReadonly } from "ts-essentials";
import { Cocktail } from "../../domain/model/cocktail.entity";

type GetCocktailsResponse = DeepReadonly<{
    cocktails: Array<{
        id: string,
        name: string,
        image: string
    }>
}>

const GetCocktailsResponse = {
    with: (properties: GetCocktailsResponse) => properties,

    fromModel: (cocktails: Array<Cocktail>): GetCocktailsResponse => {
        let cocktailsList = []

        for(let i = 0 ; i < cocktails.length ; i++){
            cocktailsList.push({
                id: cocktails[i].id,
                name: cocktails[i].name,
                image: cocktails[i].image
            })
        }

        return {
            cocktails: cocktailsList
        } as GetCocktailsResponse
    }
}

export { GetCocktailsResponse }