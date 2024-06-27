import mongoose, { ObjectId } from "mongoose";
import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import { RecipesMongo } from "../recipe-mongo.repository";
import * as config from '../../../../commons/utils/config'
import { CocktailMongoPublisher } from "../../../../cocktail/infrastructure/persistence/cocktail.publisher";
import { CocktailType } from "../../../../cocktail/infrastructure/persistence/cocktail.type";
import { IngredientType } from "../../persistence/ingredient.type";
import { StepType } from "../../persistence/step.type";
import { RecipeType } from "../../persistence/recipe.type";
import { RecipeMongoPublisher } from "../../persistence/recipe.publisher";

describe('recipe mongo repository', () => {
    let recipesMongo: RecipesMongo
    const databaseUrl = config.MONGODB_URI || ''
    const cocktailData = {
        name: 'martini',
        image: 'img'
    } as CocktailType
    let cocktailId: ObjectId

    beforeAll(async () => {
        await mongoose.connect(databaseUrl);

        recipesMongo = new RecipesMongo()

        const cocktail = new CocktailMongoPublisher(cocktailData)
        cocktail.save()
        cocktailId = cocktail._id
    })
    it('registered cocktail without recipes', async () => {
        const recipes = await recipesMongo.getAll(cocktailId.toString())

        expect(recipes.length).toBe(0)
    })
    it('registered cocktail with one recipe', async () => {
        const recipeData = {
            cocktailId: cocktailId,
            name: 'original',
            ingredients: [
                {
                    name: 'ginebra',
                    quantity: 3,
                    units: 'oz'
                } as IngredientType,
                {
                    name: 'white vermouth',
                    quantity: 1,
                    units: 'oz'
                } as IngredientType
            ],
            steps: [
                {
                    order: 1,
                    description: '\npour ginebra into the mixing glass'
                } as StepType,
                {
                    order: 2,
                    description: 'pour white vermouth into the mixing glass'
                } as StepType
            ]
        } as RecipeType
        const recipe = new RecipeMongoPublisher(recipeData)
        await recipe.save()

        const recipes = await recipesMongo.getAll(cocktailId.toString())

        expect(recipes.length).toBe(1)
    })
    it('registered cocktail with two recipes', async () => {
        const recipe1Data = {
            cocktailId: cocktailId,
            name: 'original',
            ingredients: [
                {
                    name: 'ginebra',
                    quantity: 3,
                    units: 'oz'
                } as IngredientType,
                {
                    name: 'white vermouth',
                    quantity: 1,
                    units: 'oz'
                } as IngredientType
            ],
            steps: [
                {
                    order: 1,
                    description: '\npour ginebra into the mixing glass'
                } as StepType,
                {
                    order: 2,
                    description: 'pour white vermouth into the mixing glass'
                } as StepType
            ]
        } as RecipeType
        const recipe2Data = {
            cocktailId: cocktailId,
            name: 'perfect',
            ingredients: [
                {
                    name: 'ginebra',
                    quantity: 2,
                    units: 'oz'
                } as IngredientType,
                {
                    name: 'white vermouth',
                    quantity: 1,
                    units: 'oz'
                } as IngredientType,
                {
                    name: 'sweet vermouth',
                    quantity: 1,
                    units: 'oz'
                } as IngredientType
            ],
            steps: [
                {
                    order: 1,
                    description: '\npour ginebra into the mixing glass'
                } as StepType,
                {
                    order: 2,
                    description: 'pour white vermouth into the mixing glass'
                } as StepType,
                {
                    order: 2,
                    description: 'pour sweet vermouth into the mixing glass'
                } as StepType
            ]
        } as RecipeType
        const recipe1 = new RecipeMongoPublisher(recipe1Data)
        await recipe1.save()
        const recipe2 = new RecipeMongoPublisher(recipe2Data)
        await recipe2.save()

        const recipes = await recipesMongo.getAll(cocktailId.toString())

        expect(recipes.length).toBe(2)
    })
    afterEach(async () => {
        await RecipeMongoPublisher.deleteMany({})
    })
    afterAll(async () => {
        await CocktailMongoPublisher.deleteMany({})
    })
})