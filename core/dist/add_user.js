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
const user_type_1 = require("./auth/infrastructure/persistence/user.type");
const bcrypt_1 = __importDefault(require("bcrypt"));
const log = () => __awaiter(void 0, void 0, void 0, function* () {
    const email = 'franjomor@gmail.com';
    const username = 'franjomor';
    const password = 'RoNoA_232003';
    const encryptedPassword = yield bcrypt_1.default.hash(password, 10);
    const newUser = new user_type_1.UserMongo({
        username: username,
        email: email,
        password: encryptedPassword
    });
    yield mongoose_1.default.connect('mongodb+srv://fadministrator:hxTYpKdqGQLSEjL1@cocktails-manager.aawlrwo.mongodb.net/prod?retryWrites=true&w=majority&appName=cocktails-manager');
    yield newUser.save();
    mongoose_1.default.connection.close();
});
log();
