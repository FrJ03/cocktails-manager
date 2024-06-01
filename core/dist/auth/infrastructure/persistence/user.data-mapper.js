"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataMapper = void 0;
const user_entity_1 = require("../../domain/model/user.entity");
const email_1 = require("../../domain/model/value-objects/email");
const UserDataMapper = {
    toModel: (user) => new user_entity_1.User(user._id.toString(), user.username, new email_1.Email(user.email), user.password)
};
exports.UserDataMapper = UserDataMapper;
