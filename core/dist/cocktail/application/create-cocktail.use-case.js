"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCocktailUseCase = void 0;
const cocktail_entity_1 = require("../domain/model/cocktail.entity");
class CreateCocktailUseCase {
    constructor(cocktails) {
        this.cocktails = cocktails;
    }
    with(cocktailData) {
        return __awaiter(this, void 0, void 0, function* () {
            const cocktail = cocktail_entity_1.Cocktail.create('1', cocktailData.name, cocktailData.image);
            if (cocktail !== undefined) {
                return yield this.cocktails.save(cocktail);
            }
            else {
                return false;
            }
        });
    }
}
exports.CreateCocktailUseCase = CreateCocktailUseCase;
