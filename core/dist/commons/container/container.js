"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const login_user_use_case_1 = require("../../auth/application/login-user.use-case");
const users_mongo_repository_1 = require("../../auth/infrastructure/services/users-mongo.repository");
const Container = {
    init: () => {
        const users = new users_mongo_repository_1.UsersMongo();
        return {
            loginUser: new login_user_use_case_1.LoginUserUseCase(users)
        };
    }
};
exports.container = Container.init();
