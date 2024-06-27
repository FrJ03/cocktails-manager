import mongoose, { ObjectId } from "mongoose";
import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import { GetCocktailRecipesUseCase } from "../get-cocktail-recipes.use-case";
import { CocktailType } from "../../../cocktail/infrastructure/persistence/cocktail.type";
import { RecipesMongo } from "../../infrastructure/services/recipe-mongo.repository";
import { CocktailMongoPublisher } from "../../../cocktail/infrastructure/persistence/cocktail.publisher";
import { GetCocktailRecipesRequest } from "../../dto/request/get-cocktail-recipes.request";
import { RecipeMongoPublisher } from "../../infrastructure/persistence/recipe.publisher";
import * as config from '../../../commons/utils/config'
import { RecipeType } from "../../infrastructure/persistence/recipe.type";
import { StepType } from "../../infrastructure/persistence/step.type";
import { IngredientType } from "../../infrastructure/persistence/ingredient.type";

describe('recipe mongo repository', () => {
    let getCocktailRecipes: GetCocktailRecipesUseCase
    const databaseUrl = config.MONGODB_URI || ''
    const cocktailData = {
        name: 'martini',
        image: 'img'
    } as CocktailType
    let cocktailId: ObjectId

    beforeAll(async () => {
        await mongoose.connect(databaseUrl);

        getCocktailRecipes = new GetCocktailRecipesUseCase(new RecipesMongo)

        const cocktail = new CocktailMongoPublisher(cocktailData)
        cocktail.save()
        cocktailId = cocktail._id
    })
    it('registered cocktail without recipes', async () => {
        const request = {
            cocktailId: cocktailId.toString()
        } as GetCocktailRecipesRequest

        const response = await getCocktailRecipes.with(request)

        expect(response.recipes.length).toBe(0)
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
        const request = {
            cocktailId: cocktailId.toString()
        }

        const response = await getCocktailRecipes.with(request)

        expect(response.recipes.length).toBe(1)
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
        const request = {
            cocktailId: cocktailId.toString()
        }

        const response = await getCocktailRecipes.with(request)

        expect(response.recipes.length).toBe(2)
    })
    afterEach(async () => {
        await RecipeMongoPublisher.deleteMany({})
    })
    afterAll(async () => {
        await CocktailMongoPublisher.deleteMany({})
    })
})