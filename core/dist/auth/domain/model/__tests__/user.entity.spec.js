"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const user_entity_1 = require("../user.entity");
const email_1 = require("../value-objects/email");
(0, vitest_1.describe)('User entity', () => {
    (0, vitest_1.describe)('Create', () => {
        (0, vitest_1.it)('Constructor', () => {
            const id = '1';
            const username = 'test';
            const email = new email_1.Email('test@test.es');
            const password = 'test';
            const user = new user_entity_1.User(id, username, email, password);
            (0, vitest_1.expect)(user).toBeInstanceOf(user_entity_1.User);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.id).toBe(id);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.username).toBe(username);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.email).toBe(email);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.password).toBe(password);
        });
        (0, vitest_1.it)('Valid user', () => {
            const id = '1';
            const username = 'test';
            const email = 'test@test.es';
            const password = 'test';
            const user = user_entity_1.User.create(id, username, email, password);
            (0, vitest_1.expect)(user).toBeInstanceOf(user_entity_1.User);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.id).toBe(id);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.username).toBe(username);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.emailStr).toBe(email);
            (0, vitest_1.expect)(user === null || user === void 0 ? void 0 : user.password).toBe(password);
        });
        (0, vitest_1.it)('Invalid user', () => {
            const id = '1';
            const username = 'test';
            const email = 'test@test.';
            const password = 'test';
            const user = user_entity_1.User.create(id, username, email, password);
            (0, vitest_1.expect)(user).toBe(undefined);
        });
    });
});
