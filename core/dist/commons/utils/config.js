"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = exports.SALT = exports.SECRET = exports.MONGODB_URI = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ENV = process.env.ENV;
exports.ENV = ENV;
const SECRET = process.env.SECRET;
exports.SECRET = SECRET;
const SALT = process.env.SALT;
exports.SALT = SALT;
const PORT = process.env.PORT;
exports.PORT = PORT;
const MONGODB_URI = process.env.ENV === 'test'
    ? process.env.MONGODB_TEST_URI
    : (process.env.ENV === 'dev') ?
        process.env.MONGODB_DEV_URI
        :
            process.env.MONGODB_PROD_URI;
exports.MONGODB_URI = MONGODB_URI;
