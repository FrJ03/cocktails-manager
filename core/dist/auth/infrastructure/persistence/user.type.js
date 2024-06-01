"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.UserMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: String,
    email: String,
    password: String
});
exports.UserSchema = UserSchema;
const UserMongo = mongoose_1.default.model('User', UserSchema);
exports.UserMongo = UserMongo;
