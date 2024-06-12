import { DeepReadonly } from "ts-essentials"
import { CocktailType } from "../../infrastructure/persistence/cocktail.type"

type CocktailResponse = DeepReadonly<{
    id: string,
    name: string,
    image: string
}>

const CocktailResponse = {
    fromType: (cocktail: CocktailType): CocktailResponse => {
        return {
            id: cocktail._id.toString(),
            name: cocktail.name,
            image: cocktail.image
        }
    }
}

export { CocktailResponse }