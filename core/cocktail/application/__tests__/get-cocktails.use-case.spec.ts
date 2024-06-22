import { it, describe, expect, beforeAll, beforeEach, afterEach } from 'vitest'
import { GetCocktailsUseCase } from '../get-cocktails.use-case'
import mongoose from 'mongoose'
import { CocktailMongoPublisher } from '../../infrastructure/persistence/cocktail.publisher'
import { CocktailsMongo } from '../../infrastructure/services/cocktails-mongo.repository'
import * as config from '../../../commons/utils/config'

describe('get all cocktails use case', () => {
    let getCocktails: GetCocktailsUseCase
    const databaseUrl = config.MONGODB_URI || ''
    beforeAll(async() => {
        await mongoose.connect(databaseUrl);

        getCocktails = new GetCocktailsUseCase(new CocktailsMongo)
    })
    it('there are any cocktails', async () => {
        const cocktails = await getCocktails.with()

        expect(cocktails.cocktails.length).toBe(0)
    })
    describe('with cocktails saved', () => {
        const cocktail1 = {
            name: 'cocktail1',
            image: 'cocktail1'
        }
        const cocktail2 = {
            name: 'cocktail2',
            image: 'cocktail2'
        }
        beforeEach(async () => {
            const newCocktail = new CocktailMongoPublisher(cocktail1)

            await newCocktail.save()
        })
        it('with one cocktail', async () => {
            const cocktails = await getCocktails.with()

            expect(cocktails.cocktails.length).toBe(1)
        })
        it('with two cocktail', async () => {
            const newCocktail = new CocktailMongoPublisher(cocktail2)
            await newCocktail.save()

            const cocktails = await getCocktails.with()

            expect(cocktails.cocktails.length).toBe(2)
        })
        afterEach(async () => {
            await CocktailMongoPublisher.deleteMany({})
        })
    })
})