import { it, describe, expect, beforeAll, beforeEach, afterEach } from 'vitest'
import { CocktailsMongo } from '../cocktails-mongo.repository'
import { Cocktail } from '../../../domain/model/cocktail.entity'
import mongoose from 'mongoose'
import { CocktailMongoPublisher } from '../../persistence/cocktail.publisher'

describe('cocktails infrastructure in mongodb', () => {
    let cocktailsMongo: CocktailsMongo
    beforeAll(async() => {
        await mongoose.connect('mongodb+srv://fadministrator:hxTYpKdqGQLSEjL1@cocktails-manager.aawlrwo.mongodb.net/test?retryWrites=true&w=majority&appName=cocktails-manager');

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
})