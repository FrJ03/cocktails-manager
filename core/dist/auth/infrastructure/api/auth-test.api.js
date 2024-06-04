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
exports.AuthTestRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_type_1 = require("../persistence/user.type");
const bcrypt_1 = __importDefault(require("bcrypt"));
const AuthTestRouter = express_1.default.Router();
exports.AuthTestRouter = AuthTestRouter;
AuthTestRouter.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (!request.body.email || !request.body.password || !request.body.username) {
        response.sendStatus(400);
    }
    const encryptedPassword = yield bcrypt_1.default.hash(request.body.password, 10);
    const newUser = new user_type_1.UserMongo({
        username: request.body.username,
        email: request.body.email,
        password: encryptedPassword
    });
    yield newUser.save();
    response.sendStatus(200);
}));
AuthTestRouter.delete('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_type_1.UserMongo.deleteMany({});
    response.sendStatus(200);
}));
