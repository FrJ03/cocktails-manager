"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cocktail_entity_1 = require("../cocktail.entity");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('cocktail entity test', () => {
    (0, vitest_1.describe)('constructor', () => {
        (0, vitest_1.it)('Creating an object', () => {
            const cocktailData = {
                id: 'cocktail-id',
                name: 'cocktail-name',
                image: 'cocktail-image'
            };
            const cocktail = new cocktail_entity_1.Cocktail(cocktailData.id, cocktailData.name, cocktailData.image);
            (0, vitest_1.expect)(cocktail.id).toBe(cocktailData.id);
            (0, vitest_1.expect)(cocktail.name).toBe(cocktailData.name);
            (0, vitest_1.expect)(cocktail.image).toBe(cocktailData.image);
        });
    });
    (0, vitest_1.describe)('create', () => {
        (0, vitest_1.it)('Creating a valid object', () => {
            const cocktailData = {
                id: 'cocktail-id',
                name: 'cocktail-name',
                image: 'cocktail-image'
            };
            const cocktail = cocktail_entity_1.Cocktail.create(cocktailData.id, cocktailData.name, cocktailData.image);
            (0, vitest_1.expect)(cocktail).not.toBeUndefined();
            if (cocktail !== undefined) {
                (0, vitest_1.expect)(cocktail.id).toBe(cocktailData.id);
                (0, vitest_1.expect)(cocktail.name).toBe(cocktailData.name);
                (0, vitest_1.expect)(cocktail.image).toBe(cocktailData.image);
            }
        });
        (0, vitest_1.it)('Creating a object with invalid id', () => {
            const cocktailData = {
                id: '',
                name: 'cocktail-name',
                image: 'cocktail-image'
            };
            const cocktail = cocktail_entity_1.Cocktail.create(cocktailData.id, cocktailData.name, cocktailData.image);
            (0, vitest_1.expect)(cocktail).toBeUndefined();
        });
        (0, vitest_1.it)('Creating a object with invalid name', () => {
            const cocktailData = {
                id: 'cocktail-id',
                name: '',
                image: 'cocktail-image'
            };
            const cocktail = cocktail_entity_1.Cocktail.create(cocktailData.id, cocktailData.name, cocktailData.image);
            (0, vitest_1.expect)(cocktail).toBeUndefined();
        });
        (0, vitest_1.it)('Creating a object with invalid image', () => {
            const cocktailData = {
                id: 'cocktail-id',
                name: 'cocktail-name',
                image: ''
            };
            const cocktail = cocktail_entity_1.Cocktail.create(cocktailData.id, cocktailData.name, cocktailData.image);
            (0, vitest_1.expect)(cocktail).toBeUndefined();
        });
    });
});
