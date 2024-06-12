"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CocktailSchema = exports.CocktailMongoPublisher = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CocktailSchema = new mongoose_1.default.Schema({
    name: String,
    image: String
});
exports.CocktailSchema = CocktailSchema;
const CocktailMongoPublisher = mongoose_1.default.model('Cocktail', CocktailSchema);
exports.CocktailMongoPublisher = CocktailMongoPublisher;
