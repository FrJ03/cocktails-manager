"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CocktailFactory = void 0;
const cocktail_entity_1 = require("./cocktail.entity");
exports.CocktailFactory = {
    create: (cocktail) => {
        return new cocktail_entity_1.Cocktail(cocktail.id, cocktail.name, cocktail.image);
    }
};
