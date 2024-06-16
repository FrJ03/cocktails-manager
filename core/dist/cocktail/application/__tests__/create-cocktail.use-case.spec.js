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
const mongoose_1 = __importDefault(require("mongoose"));
const vitest_1 = require("vitest");
const create_cocktail_use_case_1 = require("../create-cocktail.use-case");
const cocktails_mongo_repository_1 = require("../../infrastructure/services/cocktails-mongo.repository");
const cocktail_publisher_1 = require("../../infrastructure/persistence/cocktail.publisher");
(0, vitest_1.describe)('create cocktail use case', () => {
    let createCocktail;
    const databaseUrl = '<DATABASE URL>';
    (0, vitest_1.beforeAll)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connect(databaseUrl);
        createCocktail = new create_cocktail_use_case_1.CreateCocktailUseCase(new cocktails_mongo_repository_1.CocktailsMongo);
    }));
    (0, vitest_1.it)('save a cocktail that not exists', () => __awaiter(void 0, void 0, void 0, function* () {
        const cocktail = {
            name: 'test',
            image: 'test'
        };
        const response = yield createCocktail.with(cocktail);
        (0, vitest_1.expect)(response).toBeTruthy();
    }));
    (0, vitest_1.describe)('with existing cocktails', () => {
        const cocktail1 = {
            name: 'cocktail1',
            image: 'cocktail1'
        };
        (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
            const newCocktail = new cocktail_publisher_1.CocktailMongoPublisher(cocktail1);
            yield newCocktail.save();
        }));
        (0, vitest_1.it)('save a cocktail that not exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const cocktail2 = {
                name: 'test',
                image: 'test'
            };
            const response = yield createCocktail.with(cocktail2);
            (0, vitest_1.expect)(response).toBeTruthy();
        }));
        (0, vitest_1.it)('save a cocktail that already exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const cocktail2 = {
                id: '1',
                name: cocktail1.name,
                image: 'test'
            };
            const response = yield createCocktail.with(cocktail2);
            (0, vitest_1.expect)(response).toBeFalsy();
        }));
    });
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield cocktail_publisher_1.CocktailMongoPublisher.deleteMany({});
    }));
});
