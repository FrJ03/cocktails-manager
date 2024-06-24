import { describe, it, expect } from "vitest";
import Ingredient from "../ingredient.entity";
import StepOrder from "../step-order.entity";
import StepDescription from "../step-description.entity";
import Step from "../step.entity";
import Recipe from "../recipe.entity";

describe('recipe entity test', () => {
    it('constuctor test', () => {
        const ingredient1 = {
            name: 'lime juice',
            quantity: 2,
            units: 'oz'
        }
        const ingredient2 = {
            name: 'tequila',
            quantity: 2,
            units: 'oz'
        }
        const ingredients: Array<Ingredient> = []
        ingredients.push(new Ingredient(
            ingredient1.name,
            ingredient1.quantity,
            ingredient1.units
        ))
        ingredients.push(new Ingredient(
            ingredient2.name,
            ingredient2.quantity,
            ingredient2.units
        ))
        const order1 = 1
        const description1 = 'pour 2 ounces of lime juice into the shaker'
        const order2 = 2
        const description2 = 'pour 2 ounces of tequila into the shaker'
        const step1Data = {
            order: new StepOrder(order1),
            description: new StepDescription(description1)
        }
        const step2Data = {
            order: new StepOrder(order2),
            description: new StepDescription(description2)
        }
        const steps: Array<Step> = []
        steps.push(new Step(
            step1Data.order,
            step1Data.description
        ))
        steps.push(new Step(
            step2Data.order,
            step2Data.description
        ))
        const recipeData = {
            name: 'cocktail',
            ingredients: ingredients,
            steps: steps
        }

        const recipe = new Recipe(
            recipeData.name,
            recipeData.ingredients,
            recipeData.steps
        )

        expect(recipe.name).toBe(recipeData.name)
        expect(recipe.ingredients[0]).toBe(recipeData.ingredients[0])
        expect(recipe.ingredients[1]).toBe(recipeData.ingredients[1])
        expect(recipe.steps[0]).toBe(recipeData.steps[0])
        expect(recipe.steps[1]).toBe(recipeData.steps[1])
    })
})