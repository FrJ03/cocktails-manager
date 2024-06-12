"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCocktailsResponse = void 0;
const GetCocktailsResponse = {
    with: (properties) => properties,
    fromModel: (cocktails) => {
        let cocktailsList = [];
        for (let i = 0; i < cocktails.length; i++) {
            cocktailsList.push({
                id: cocktails[i].id,
                name: cocktails[i].name,
                image: cocktails[i].image
            });
        }
        return {
            cocktails: cocktailsList
        };
    }
};
exports.GetCocktailsResponse = GetCocktailsResponse;
