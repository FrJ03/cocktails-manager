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
exports.LoginUserUseCase = void 0;
const email_1 = require("../domain/model/value-objects/email");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config = __importStar(require("../../commons/utils/config"));
class LoginUserUseCase {
    constructor(users) {
        this.users = users;
    }
    with(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = email_1.Email.create(command.email);
            if (email !== undefined) {
                try {
                    const user = yield this.users.findByEmail(email);
                    const passwordCorrect = yield bcrypt_1.default.compare(command.password, user.password);
                    if (!passwordCorrect) {
                        return {
                            username: undefined,
                            email: undefined,
                            token: undefined,
                            code: 400
                        };
                    }
                    const userForToken = {
                        username: user.username,
                        email: user.email,
                        id: user.id,
                    };
                    const token = jsonwebtoken_1.default.sign(userForToken, config.SECRET || '');
                    return {
                        username: user.username,
                        email: user.emailStr,
                        token: token,
                        code: 200
                    };
                }
                catch (error) {
                    return {
                        username: undefined,
                        email: undefined,
                        token: undefined,
                        code: 404
                    };
                }
            }
            else {
                return {
                    username: undefined,
                    email: undefined,
                    token: undefined,
                    code: 400
                };
            }
        });
    }
}
exports.LoginUserUseCase = LoginUserUseCase;
