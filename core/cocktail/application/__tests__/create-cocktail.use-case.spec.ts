import mongoose from "mongoose"
import { describe, it, expect, beforeEach, beforeAll, afterAll, afterEach } from "vitest"
import { CreateCocktailUseCase } from "../create-cocktail.use-case"
import { CocktailsMongo } from "../../infrastructure/services/cocktails-mongo.repository"
import { CreateCocktailRequest } from "../../dto/request/create-cocktail.request"
import { CocktailMongoPublisher } from "../../infrastructure/persistence/cocktail.publisher"
import * as config from '../../../commons/utils/config'

describe('create cocktail use case', () => {
    let createCocktail: CreateCocktailUseCase
    const databaseUrl = config.MONGODB_URI || ''
    beforeAll(async() => {
        await mongoose.connect(databaseUrl);

        createCocktail = new CreateCocktailUseCase(new CocktailsMongo)
    })
    it('save a cocktail that not exists', async () => {
        const cocktail = {
            name: 'test',
            image: 'test'
        } as CreateCocktailRequest

        const response = await createCocktail.with(cocktail)

        expect(response).toBeTruthy()
    })
    describe('with existing cocktails', () => {
        const cocktail1 = {
            name: 'cocktail1',
            image: 'cocktail1'
        }
        
        beforeEach(async () => {
            const newCocktail = new CocktailMongoPublisher(cocktail1)

            await newCocktail.save()
        })
        it('save a cocktail that not exists', async () => {
            const cocktail2 = {
                name: 'test',
                image: 'test'
            } as CreateCocktailRequest

            const response = await createCocktail.with(cocktail2)

            expect(response).toBeTruthy()
        })
        it('save a cocktail that already exists', async () => {
            const cocktail2 = {
                id: '1',
                name: cocktail1.name,
                image: 'test'
            } as CreateCocktailRequest

            const response = await createCocktail.with(cocktail2)

            expect(response).toBeFalsy()
        })
    })
    afterEach(async () => {
        await CocktailMongoPublisher.deleteMany({})
    })
})