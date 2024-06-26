import { describe, it, expect } from "vitest";
import { RecipeResponse } from "../../../dto/response/recipe.response";
import { IngredientResponse } from "../../../dto/response/ingredient.response";
import { StepResponse } from "../../../dto/response/step.response";
import { RecipeFactory } from "../recipe.factory";

describe('recipe factory tests', () => {
    it('valid recipe', () => {
        const recipeData = {
            name: 'Martini',
            ingredients: [
                {
                    name: 'ginebra',
                    quantity: 3,
                    units: 'oz'
                } as IngredientResponse,
                {
                    name: 'white vermouth',
                    quantity: 1,
                    units: 'oz'
                } as IngredientResponse
            ],
            steps: [
                {
                    order: 1,
                    description: 'pour ginebra into the mixing glass'
                } as StepResponse,
                {
                    order: 2,
                    description: 'pour white vermouth into the mixing glass'
                } as StepResponse
            ]
        } as RecipeResponse

        const recipe = RecipeFactory.create(recipeData)

        expect(recipe).not.toBeUndefined()
        if(recipe !== undefined){
            expect(recipe.name).toBe(recipeData.name)
            expect(recipe.ingredients.length).toBe(recipeData.ingredients.length)
            expect(recipe.steps.length).toBe(recipeData.steps.length)
        }
    })
    it('not valid step', () => {
        const recipeData = {
            name: 'Martini',
            ingredients: [
                {
                    name: 'ginebra',
                    quantity: 3,
                    units: 'oz'
                } as IngredientResponse,
                {
                    name: 'white vermouth',
                    quantity: 1,
                    units: 'oz'
                } as IngredientResponse
            ],
            steps: [
                {
                    order: 1,
                    description: '\npour ginebra into the mixing glass'
                } as StepResponse,
                {
                    order: 2,
                    description: 'pour white vermouth into the mixing glass'
                } as StepResponse
            ]
        } as RecipeResponse

        const recipe = RecipeFactory.create(recipeData)

        console.error(recipe)

        expect(recipe).toBeUndefined()
    })
})