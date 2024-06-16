import { DeepReadonly } from "ts-essentials"

type CreateCocktailRequest = DeepReadonly<{
    name: string,
    image: string
}>

const CreateCocktailRequest = {
    with: (properties: CreateCocktailRequest) => properties
}

export { CreateCocktailRequest }