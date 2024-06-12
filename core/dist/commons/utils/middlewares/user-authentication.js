"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthorization = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userAuthorization = (request, response, next) => {
    if (request.headers.authorization === undefined) {
        response.sendStatus(401);
    }
    else {
        const decodedToken = jsonwebtoken_1.default.decode(`${request.headers.authorization}`);
        if (typeof decodedToken == 'string' || decodedToken === null) {
            response.sendStatus(401);
        }
        else {
            next();
        }
    }
};
exports.userAuthorization = userAuthorization;
