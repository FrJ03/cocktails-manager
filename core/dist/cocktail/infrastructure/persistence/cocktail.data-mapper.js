"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CocktailDataMapper = void 0;
const cocktail_entity_1 = require("../../domain/model/cocktail.entity");
const CocktailDataMapper = {
    toModel: (cocktail) => new cocktail_entity_1.Cocktail(cocktail._id.toString(), cocktail.name, cocktail.image)
};
exports.CocktailDataMapper = CocktailDataMapper;
