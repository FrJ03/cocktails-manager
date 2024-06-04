"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = void 0;
const UserResponse = {
    fromModel: (user) => ({
        email: user.emailStr,
        id: user.id,
        username: user.username,
        password: user.password,
    }),
    with: (properties) => properties,
};
exports.UserResponse = UserResponse;
