import { describe, it, expect } from "vitest";
import Ingredient from "../ingredient.entity";

describe('ingredient entity test', () => {
    it('create an ingredient', () => {
        const ingredientData = {
            name: 'lime juice',
            quantity: 2,
            units: 'oz'
        }

        const ingredient = new Ingredient(ingredientData.name, ingredientData.quantity, ingredientData.units)

        expect(ingredient.name).toBe(ingredientData.name)
        expect(ingredient.quantity).toBe(ingredientData.quantity)
        expect(ingredient.units).toBe(ingredientData.units)
    })
})