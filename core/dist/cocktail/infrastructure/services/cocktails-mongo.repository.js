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
exports.CocktailsMongo = void 0;
const not_found_error_1 = require("../../../commons/domain/errors/not-found-error");
const cocktail_data_mapper_1 = require("../persistence/cocktail.data-mapper");
const cocktail_publisher_1 = require("../persistence/cocktail.publisher");
class CocktailsMongo {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cocktails = yield cocktail_publisher_1.CocktailMongoPublisher.find({}).lean();
                const cocktailsArray = [];
                cocktails.forEach(cocktail => cocktailsArray.push(cocktail_data_mapper_1.CocktailDataMapper.toModel(cocktail)));
                return cocktailsArray;
            }
            catch (_a) {
                throw new not_found_error_1.NotFoundError('cocktails_database_error');
            }
        });
    }
    save(cocktail) {
        return __awaiter(this, void 0, void 0, function* () {
            const cocktailResponse = yield cocktail_publisher_1.CocktailMongoPublisher.findOne({ name: cocktail.name }).lean();
            if (cocktailResponse == null) {
                const cocktailData = new cocktail_publisher_1.CocktailMongoPublisher({
                    name: cocktail.name,
                    image: cocktail.image
                });
                yield cocktailData.save();
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.CocktailsMongo = CocktailsMongo;
