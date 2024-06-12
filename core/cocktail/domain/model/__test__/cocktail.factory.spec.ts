import { describe, it, expect } from 'vitest';
import { CocktailFactory } from '../cocktail.factory'
import { CocktailType } from '../../../infrastructure/persistence/cocktail.type';
import { CocktailResponse } from '../../../dto/response/cocktail.response';

describe('cocktail factory test', () => {
    it('from type', () => {
        const cocktailData = {
            id: 'cocktail-id',
            name: 'cocktail-name',
            image: 'cocktail-image'
        } as CocktailResponse

        const cocktail = CocktailFactory.create(cocktailData)

        expect(cocktail.id).toBe(cocktailData.id)
        expect(cocktail.name).toBe(cocktailData.name)
        expect(cocktail.image).toBe(cocktailData.image)
    })
})