import { it, describe, expect, beforeAll, beforeEach, afterEach } from 'vitest'
import mongoose, { ObjectId } from 'mongoose'
import * as config from '../../../commons/utils/config'
import { CocktailMongoPublisher } from '../../infrastructure/persistence/cocktail.publisher'
import { DeleteCocktailUseCase } from '../delete-cocktail.use-case'
import { CocktailsMongo } from '../../infrastructure/services/cocktails-mongo.repository'
import { DeleteCocktailRequest } from '../../dto/request/delete-cocktail.request'

describe('cocktails infrastructure in mongodb', () => {
    let deleteCocktail: DeleteCocktailUseCase
    const databaseUrl = config.MONGODB_URI || ''
    beforeAll(async() => {
        await mongoose.connect(databaseUrl);
        deleteCocktail = new DeleteCocktailUseCase(new CocktailsMongo())
    })
    describe('delete cocktail', () => {
        const cocktail1 = {
            name: 'cocktail1',
            image: 'cocktail1'
        }
        const cocktail2 = {
            name: 'cocktail2',
            image: 'cocktail2'
        }
        let id1: ObjectId
        beforeEach(async () => {
            const newCocktail1 = new CocktailMongoPublisher(cocktail1)
            await newCocktail1.save()

            const newCocktail2 = new CocktailMongoPublisher(cocktail2)
            await newCocktail2.save()

            id1 = newCocktail1._id
        })
        it('delete an existing cocktail', async () => {
            const request = {
                id: id1.toString()
            } as DeleteCocktailRequest

            const deleted = await deleteCocktail.with(request)

            const allCocktails = await CocktailMongoPublisher.find({}).lean()

            expect(deleted).toBeTruthy()
            expect(allCocktails.length).toBe(1)
        })
        it('delete a not existing cocktail', async () => {
            const request = {
                id: '000000000000000000000000'
            } as DeleteCocktailRequest

            const deleted = await deleteCocktail.with(request)

            const allCocktails = await CocktailMongoPublisher.find({}).lean()

            expect(deleted).toBeFalsy()
            expect(allCocktails.length).toBe(2)
        })
        afterEach(async () => {
            await CocktailMongoPublisher.deleteMany({})
        })
    })
})