import { Cocktail } from "../cocktail.entity";
import { describe, it, expect } from "vitest";

describe('cocktail entity test', () => {
    describe('constructor', () => {
        it('Creating an object', () => {
            const cocktailData = {
                id: 'cocktail-id',
                name: 'cocktail-name',
                image: 'cocktail-image'
            }

            const cocktail: Cocktail = new Cocktail(cocktailData.id, cocktailData.name, cocktailData.image)

            expect(cocktail.id).toBe(cocktailData.id)
            expect(cocktail.name).toBe(cocktailData.name)
            expect(cocktail.image).toBe(cocktailData.image)
        })
    })
    describe('create', () => {
        it('Creating a valid object', () => {
            const cocktailData = {
                id: 'cocktail-id',
                name: 'cocktail-name',
                image: 'cocktail-image'
            }

            const cocktail: Cocktail | undefined =  Cocktail.create(cocktailData.id, cocktailData.name, cocktailData.image)

            expect(cocktail).not.toBeUndefined()
            if(cocktail !== undefined){
                expect(cocktail.id).toBe(cocktailData.id)
                expect(cocktail.name).toBe(cocktailData.name)
                expect(cocktail.image).toBe(cocktailData.image)
            }
        })
        it('Creating a object with invalid id', () => {
            const cocktailData = {
                id: '',
                name: 'cocktail-name',
                image: 'cocktail-image'
            }

            const cocktail: Cocktail | undefined =  Cocktail.create(cocktailData.id, cocktailData.name, cocktailData.image)

            expect(cocktail).toBeUndefined()
        })
        it('Creating a object with invalid name', () => {
            const cocktailData = {
                id: 'cocktail-id',
                name: '',
                image: 'cocktail-image'
            }

            const cocktail: Cocktail | undefined =  Cocktail.create(cocktailData.id, cocktailData.name, cocktailData.image)

            expect(cocktail).toBeUndefined()
        })
        it('Creating a object with invalid image', () => {
            const cocktailData = {
                id: 'cocktail-id',
                name: 'cocktail-name',
                image: ''
            }

            const cocktail: Cocktail | undefined =  Cocktail.create(cocktailData.id, cocktailData.name, cocktailData.image)

            expect(cocktail).toBeUndefined()
        })
    })
})