import { DeepReadonly } from "ts-essentials";

type IngredientResponse = DeepReadonly<{
    name: string,
    quantity: number,
    units: string
}>

export { IngredientResponse }