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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const cocktails_mongo_repository_1 = require("../cocktails-mongo.repository");
const mongoose_1 = __importDefault(require("mongoose"));
const cocktail_publisher_1 = require("../../persistence/cocktail.publisher");
(0, vitest_1.describe)('cocktails infrastructure in mongodb', () => {
    let cocktailsMongo;
    const databaseUrl = '<DATABASE URL>';
    (0, vitest_1.beforeAll)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connect(databaseUrl);
        cocktailsMongo = new cocktails_mongo_repository_1.CocktailsMongo();
    }));
    (0, vitest_1.describe)('get all cocktails', () => {
        (0, vitest_1.it)('there are any cocktails', () => __awaiter(void 0, void 0, void 0, function* () {
            const cocktails = yield cocktailsMongo.getAll();
            (0, vitest_1.expect)(cocktails.length).toBe(0);
        }));
        (0, vitest_1.describe)('with cocktails saved', () => {
            const cocktail1 = {
                name: 'cocktail1',
                image: 'cocktail1'
            };
            const cocktail2 = {
                name: 'cocktail2',
                image: 'cocktail2'
            };
            (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
                const newCocktail = new cocktail_publisher_1.CocktailMongoPublisher(cocktail1);
                yield newCocktail.save();
            }));
            (0, vitest_1.it)('with one cocktail', () => __awaiter(void 0, void 0, void 0, function* () {
                const cocktails = yield cocktailsMongo.getAll();
                (0, vitest_1.expect)(cocktails.length).toBe(1);
            }));
            (0, vitest_1.it)('with two cocktail', () => __awaiter(void 0, void 0, void 0, function* () {
                const newCocktail = new cocktail_publisher_1.CocktailMongoPublisher(cocktail2);
                yield newCocktail.save();
                const cocktails = yield cocktailsMongo.getAll();
                (0, vitest_1.expect)(cocktails.length).toBe(2);
            }));
            (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
                yield cocktail_publisher_1.CocktailMongoPublisher.deleteMany({});
            }));
        });
    });
});
