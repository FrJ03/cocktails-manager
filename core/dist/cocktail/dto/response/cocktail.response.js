"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CocktailResponse = void 0;
const CocktailResponse = {
    fromType: (cocktail) => {
        return {
            id: cocktail._id.toString(),
            name: cocktail.name,
            image: cocktail.image
        };
    }
};
exports.CocktailResponse = CocktailResponse;
