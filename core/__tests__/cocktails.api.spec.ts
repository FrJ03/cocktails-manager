import { it, describe, expect, beforeAll, afterAll, beforeEach, afterEach } from 'vitest'
import mongoose, { ObjectId } from 'mongoose'
import { CocktailMongoPublisher } from '../cocktail/infrastructure/persistence/cocktail.publisher';
import { app } from "../app";
import supertest from "supertest";
import * as config from '../commons/utils/config'
import { UserMongo } from '../auth/infrastructure/persistence/user.type';
import bcrypt from 'bcrypt'

const api = supertest(app)

describe('CocktailsAPI', async () => {
    describe('get all cocktails', () => {
        it('before login', async  () => {
            await api
                .get('/api/cocktails')
                .expect(401)
        })
        describe('after login', async () => {
            let userId: ObjectId
            const password = 'test'
            const passwordHash = await bcrypt.hash(password, 10)
            const userData = {
                username: 'test',
                email: 'test@test.es',
                password: passwordHash
            }
            let token = ''
            beforeAll(async () => {
                await mongoose.connect(config.MONGODB_URI || '');

                const user = new UserMongo(userData)

                const userdbres = await user.save()

                userId = userdbres._id

                const userRequest = {
                    email: userData.email,
                    password: password
                }

                const response = await api
                    .post('/api/login')
                    .send(userRequest)
                    .expect(200)

                token = response.body.token
            })
            it('there are any cocktails', async  () => {
                const response = await api
                    .get('/api/cocktails')
                    .set('Authorization', token)
                    .expect(200)
                
                expect(response.body.cocktails.length).toBe(0)
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
                    const response = await api
                        .get('/api/cocktails')
                        .set('Authorization', token)
                        .expect(200)
                    
                    expect(response.body.cocktails.length).toBe(1)
                    expect(response.body.cocktails[0].name).toBe(cocktail1.name)
                    expect(response.body.cocktails[0].image).toBe(cocktail1.image)
                })
                it('with two cocktail', async () => {
                    const newCocktail = new CocktailMongoPublisher(cocktail2)
                    await newCocktail.save()

                    const response = await api
                        .get('/api/cocktails')
                        .set('Authorization', token)
                        .expect(200)
                    
                    expect(response.body.cocktails.length).toBe(2)
                })
                afterEach(async () => {
                    await CocktailMongoPublisher.deleteMany({})
                })
            })
            afterAll(async () => {
                await UserMongo.deleteOne({_id: userId})
            })
        })
    })/*
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
    })*/
})