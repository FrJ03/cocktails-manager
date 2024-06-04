"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const user_response_1 = require("../../../dto/responses/user.response");
const users_factory_1 = require("../users.factory");
(0, vitest_1.describe)('User factory', () => {
    (0, vitest_1.describe)('Create', () => {
        (0, vitest_1.it)('Valid user', () => {
            const userResponse = user_response_1.UserResponse.with({
                id: '1',
                username: 'test',
                email: 'test@test.es',
                password: 'test',
            });
            const user = users_factory_1.userFactory.create(userResponse);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.id).toBe(userResponse.id);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.username).toBe(userResponse.username);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.emailStr).toBe(userResponse.email);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.password).toBe(userResponse.password);
        });
        (0, vitest_1.it)('Invalid user', () => {
            const userResponse = user_response_1.UserResponse.with({
                id: '1',
                username: 'test',
                email: 'test@test',
                password: 'test',
            });
            const user = users_factory_1.userFactory.create(userResponse);
            (0, vitest_1.expect)(user).toBe(undefined);
        });
    });
});
