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
exports.GetCocktailsUseCase = void 0;
const get_cocktails_response_1 = require("../dto/response/get-cocktails.response");
class GetCocktailsUseCase {
    constructor(cocktails) {
        this.cocktails = cocktails;
    }
    with() {
        return __awaiter(this, void 0, void 0, function* () {
            const cocktails = yield this.cocktails.getAll();
            return get_cocktails_response_1.GetCocktailsResponse.fromModel(cocktails);
        });
    }
}
exports.GetCocktailsUseCase = GetCocktailsUseCase;
