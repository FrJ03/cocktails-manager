"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFactory = void 0;
const user_entity_1 = require("./user.entity");
exports.userFactory = {
    create: (userResponse) => {
        return user_entity_1.User.create(userResponse.id, userResponse.username, userResponse.email, userResponse.password);
    }
};
