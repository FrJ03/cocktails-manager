"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongoose_1 = __importDefault(require("mongoose"));
const cocktail_publisher_1 = require("../cocktail/infrastructure/persistence/cocktail.publisher");
const app_1 = require("../app");
const supertest_1 = __importDefault(require("supertest"));
const config = __importStar(require("../commons/utils/config"));
const user_type_1 = require("../auth/infrastructure/persistence/user.type");
const bcrypt_1 = __importDefault(require("bcrypt"));
const api = (0, supertest_1.default)(app_1.app);
(0, vitest_1.describe)('CocktailsAPI', () => __awaiter(void 0, void 0, void 0, function* () {
    (0, vitest_1.describe)('get all cocktails', () => {
        (0, vitest_1.it)('before login', () => __awaiter(void 0, void 0, void 0, function* () {
            yield api
                .get('/api/cocktails')
                .expect(401);
        }));
        (0, vitest_1.describe)('after login', () => __awaiter(void 0, void 0, void 0, function* () {
            let userId;
            const password = 'test';
            const passwordHash = yield bcrypt_1.default.hash(password, 10);
            const userData = {
                username: 'test',
                email: 'test@test.es',
                password: passwordHash
            };
            let token = '';
            (0, vitest_1.beforeAll)(() => __awaiter(void 0, void 0, void 0, function* () {
                yield mongoose_1.default.connect(config.MONGODB_URI || '');
                const user = new user_type_1.UserMongo(userData);
                const userdbres = yield user.save();
                userId = userdbres._id;
                const userRequest = {
                    email: userData.email,
                    password: password
                };
                const response = yield api
                    .post('/api/login')
                    .send(userRequest)
                    .expect(200);
                token = response.body.token;
            }));
            (0, vitest_1.it)('there are any cocktails', () => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield api
                    .get('/api/cocktails')
                    .set('Authorization', token)
                    .expect(200);
                (0, vitest_1.expect)(response.body.cocktails.length).toBe(0);
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
                    const response = yield api
                        .get('/api/cocktails')
                        .set('Authorization', token)
                        .expect(200);
                    (0, vitest_1.expect)(response.body.cocktails.length).toBe(1);
                    (0, vitest_1.expect)(response.body.cocktails[0].name).toBe(cocktail1.name);
                    (0, vitest_1.expect)(response.body.cocktails[0].image).toBe(cocktail1.image);
                }));
                (0, vitest_1.it)('with two cocktail', () => __awaiter(void 0, void 0, void 0, function* () {
                    const newCocktail = new cocktail_publisher_1.CocktailMongoPublisher(cocktail2);
                    yield newCocktail.save();
                    const response = yield api
                        .get('/api/cocktails')
                        .set('Authorization', token)
                        .expect(200);
                    (0, vitest_1.expect)(response.body.cocktails.length).toBe(2);
                }));
                (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
                    yield cocktail_publisher_1.CocktailMongoPublisher.deleteMany({});
                }));
            });
            (0, vitest_1.afterAll)(() => __awaiter(void 0, void 0, void 0, function* () {
                yield user_type_1.UserMongo.deleteOne({ _id: userId });
            }));
        }));
    }); /*
    describe('with cocktails saved', () => {
        const cocktail1 = {
            name: 'cocktail1',
            image: 'cocktail1'
        }
        const cocktail2 = {
            name: 'cocktail2',
            image: 'cocktail2'
        }
        beforeEach(async () => {
            const newCocktail = new CocktailMongoPublisher(cocktail1)

            await newCocktail.save()
        })
        it('with one cocktail', async () => {
            const cocktails = await getCocktails.with()

            expect(cocktails.cocktails.length).toBe(1)
        })
        it('with two cocktail', async () => {
            const newCocktail = new CocktailMongoPublisher(cocktail2)
            await newCocktail.save()

            const cocktails = await getCocktails.with()

            expect(cocktails.cocktails.length).toBe(2)
        })
        afterEach(async () => {
            await CocktailMongoPublisher.deleteMany({})
        })
    })*/
}));
