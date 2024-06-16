import { it, describe, expect, beforeAll, beforeEach, afterEach } from 'vitest'
import { CocktailsMongo } from '../cocktails-mongo.repository'
import { Cocktail } from '../../../domain/model/cocktail.entity'
import mongoose from 'mongoose'
import { CocktailMongoPublisher } from '../../persistence/cocktail.publisher'
import { CocktailFactory } from '../../../domain/model/cocktail.factory'

describe('cocktails infrastructure in mongodb', () => {
    let cocktailsMongo: CocktailsMongo
    const databaseUrl = '<DATABASE URL>'
    beforeAll(async() => {
        await mongoose.connect(databaseUrl);

        cocktailsMongo = new CocktailsMongo()
    })
    describe('get all cocktails', () => {
        it('there are any cocktails', async () => {
            const cocktails: Array<Cocktail> = await cocktailsMongo.getAll()

            expect(cocktails.length).toBe(0)
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
                const cocktails: Array<Cocktail> = await cocktailsMongo.getAll()

                expect(cocktails.length).toBe(1)
            })
            it('with two cocktail', async () => {
                const newCocktail = new CocktailMongoPublisher(cocktail2)
                await newCocktail.save()

                const cocktails: Array<Cocktail> = await cocktailsMongo.getAll()

                expect(cocktails.length).toBe(2)
            })
            afterEach(async () => {
                await CocktailMongoPublisher.deleteMany({})
            })
        })
    })
    describe('save cocktail', () => {
        it('save a cocktail that not exists', async () => {
            const cocktail = CocktailFactory.create({
                id: '1',
                name: 'test',
                image: 'test'
            })

            const response = await cocktailsMongo.save(cocktail)

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
                const cocktail2 = CocktailFactory.create({
                    id: '1',
                    name: 'test',
                    image: 'test'
                })
    
                const response = await cocktailsMongo.save(cocktail2)
    
                expect(response).toBeTruthy()
            })
            it('save a cocktail that already exists', async () => {
                const cocktail2 = CocktailFactory.create({
                    id: '1',
                    name: cocktail1.name,
                    image: 'test'
                })
    
                const response = await cocktailsMongo.save(cocktail2)
    
                expect(response).toBeFalsy()
            })
        })
        afterEach(async () => {
            await CocktailMongoPublisher.deleteMany({})
        })
    })
})