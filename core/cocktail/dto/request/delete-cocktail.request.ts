import { DeepReadonly } from "ts-essentials"

type DeleteCocktailRequest = DeepReadonly<{
    name: string,
    image: string
}>

const DeleteCocktailRequest = {
    with: (properties: DeleteCocktailRequest) => properties
}

export { DeleteCocktailRequest }