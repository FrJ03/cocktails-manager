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
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_type_1 = require("../auth/infrastructure/persistence/user.type");
const mongoose_1 = __importDefault(require("mongoose"));
const config = __importStar(require("../commons/utils/config"));
const app_1 = require("../app");
const supertest_1 = __importDefault(require("supertest"));
const api = (0, supertest_1.default)(app_1.app);
(0, vitest_1.describe)('LoginAPI', () => __awaiter(void 0, void 0, void 0, function* () {
    const password = 'test';
    const passwordHash = yield bcrypt_1.default.hash(password, 10);
    const userData = {
        username: 'test',
        email: 'test@test.es',
        password: passwordHash
    };
    let userId;
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connect(config.MONGODB_URI || '');
        const user = new user_type_1.UserMongo(userData);
        const userdbres = yield user.save();
        userId = userdbres._id;
    }));
    (0, vitest_1.it)('should log the user', () => __awaiter(void 0, void 0, void 0, function* () {
        const userRequest = {
            email: userData.email,
            password: password
        };
        const response = yield api
            .post('/api/login')
            .send(userRequest)
            .expect(200);
        (0, vitest_1.expect)(response.body).toHaveProperty('token');
        (0, vitest_1.expect)(response.body).toHaveProperty('email', userData.email);
        (0, vitest_1.expect)(response.body).toHaveProperty('username', userData.username);
    }));
    (0, vitest_1.it)('should not log the user: email not valid', () => __awaiter(void 0, void 0, void 0, function* () {
        const userRequest = {
            email: 'test',
            password: password
        };
        const response = yield api
            .post('/api/login')
            .send(userRequest)
            .expect(400);
    }));
    (0, vitest_1.it)('should not log the user: incorrect email', () => __awaiter(void 0, void 0, void 0, function* () {
        const userRequest = {
            email: 'test1@test.es',
            password: password
        };
        const response = yield api
            .post('/api/login')
            .send(userRequest)
            .expect(404);
    }));
    (0, vitest_1.it)('should not log the user: incorrect password', () => __awaiter(void 0, void 0, void 0, function* () {
        const userRequest = {
            email: userData.email,
            password: password + '1'
        };
        const response = yield api
            .post('/api/login')
            .send(userRequest)
            .expect(400);
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield user_type_1.UserMongo.deleteOne({ _id: userId });
    }));
}));
