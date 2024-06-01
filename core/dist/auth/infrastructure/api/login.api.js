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
exports.LoginRouter = void 0;
const express_1 = __importDefault(require("express"));
const login_user_request_1 = require("../../dto/requests/login-user.request");
const container_1 = require("../../../commons/container/container");
const LoginRouter = express_1.default.Router();
exports.LoginRouter = LoginRouter;
LoginRouter.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (!request.body.email ||
        request.body.email == '' ||
        !request.body.password ||
        request.body.password == '') {
        response.sendStatus(400);
    }
    else {
        const userRequest = login_user_request_1.LoginUserRequest.with({
            email: request.body.email,
            password: request.body.password
        });
        const userResponse = yield container_1.container.loginUser.with(userRequest);
        response.status(userResponse.code || 200).send(userResponse);
    }
}));
