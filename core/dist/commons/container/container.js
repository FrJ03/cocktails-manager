"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const login_user_use_case_1 = require("../../auth/application/login-user.use-case");
const users_mongo_repository_1 = require("../../auth/infrastructure/services/users-mongo.repository");
const create_cocktail_use_case_1 = require("../../cocktail/application/create-cocktail.use-case");
const get_cocktails_use_case_1 = require("../../cocktail/application/get-cocktails.use-case");
const cocktails_mongo_repository_1 = require("../../cocktail/infrastructure/services/cocktails-mongo.repository");
const Container = {
    init: () => {
        const users = new users_mongo_repository_1.UsersMongo();
        const cocktails = new cocktails_mongo_repository_1.CocktailsMongo;
        return {
            loginUser: new login_user_use_case_1.LoginUserUseCase(users),
            getCocktails: new get_cocktails_use_case_1.GetCocktailsUseCase(cocktails),
            createCocktail: new create_cocktail_use_case_1.CreateCocktailUseCase(cocktails)
        };
    }
};
exports.container = Container.init();
