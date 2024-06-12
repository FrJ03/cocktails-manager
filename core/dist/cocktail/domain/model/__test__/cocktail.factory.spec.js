"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const cocktail_factory_1 = require("../cocktail.factory");
(0, vitest_1.describe)('cocktail factory test', () => {
    (0, vitest_1.it)('from type', () => {
        const cocktailData = {
            id: 'cocktail-id',
            name: 'cocktail-name',
            image: 'cocktail-image'
        };
        const cocktail = cocktail_factory_1.CocktailFactory.create(cocktailData);
        (0, vitest_1.expect)(cocktail.id).toBe(cocktailData.id);
        (0, vitest_1.expect)(cocktail.name).toBe(cocktailData.name);
        (0, vitest_1.expect)(cocktail.image).toBe(cocktailData.image);
    });
});
