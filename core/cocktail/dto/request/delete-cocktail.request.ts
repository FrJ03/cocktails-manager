import { DeepReadonly } from "ts-essentials"

type DeleteCocktailRequest = DeepReadonly<{
    id: string
}>

const DeleteCocktailRequest = {
    with: (properties: DeleteCocktailRequest) => properties
}

export { DeleteCocktailRequest }