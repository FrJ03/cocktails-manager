"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const email_1 = require("../email");
(0, vitest_1.describe)('Email', () => {
    (0, vitest_1.describe)('Create', () => {
        (0, vitest_1.it)('Correct email', () => {
            const validEmail = 'example@example.es';
            const email = email_1.Email.create(validEmail);
            (0, vitest_1.expect)(email).toBeInstanceOf(email_1.Email);
            (0, vitest_1.expect)(email === null || email === void 0 ? void 0 : email.value).toBe(validEmail);
        });
        (0, vitest_1.it)('Incorrect email: empty email', () => {
            const invalidEmail = '';
            const email = email_1.Email.create(invalidEmail);
            (0, vitest_1.expect)(email).toBe(undefined);
        });
        (0, vitest_1.it)('Incorrect email: without @', () => {
            const invalidEmail = 'example.es';
            const email = email_1.Email.create(invalidEmail);
            (0, vitest_1.expect)(email).toBe(undefined);
        });
        (0, vitest_1.it)('Incorrect email: without .', () => {
            const invalidEmail = 'example@example';
            const email = email_1.Email.create(invalidEmail);
            (0, vitest_1.expect)(email).toBe(undefined);
        });
        (0, vitest_1.it)('Incorrect email: ending with .', () => {
            const invalidEmail = 'example@example.';
            const email = email_1.Email.create(invalidEmail);
            (0, vitest_1.expect)(email).toBe(undefined);
        });
    });
});
