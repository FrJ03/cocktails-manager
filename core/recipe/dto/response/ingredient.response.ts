import { DeepReadonly } from "ts-essentials";
import Ingredient from "../../domain/model/ingredient.entity";

type IngredientResponse = DeepReadonly<{
    name: string,
    quantity: number,
    units: string
}>

const IngredientResponse = {
    fromModel: (ingredient: Ingredient): IngredientResponse => {
        return {
            name: ingredient.name,
            quantity: ingredient.quantity,
            units: ingredient.units
        } as IngredientResponse
    }
}

export { IngredientResponse }