"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const aplication_error_1 = require("./aplication-error");
class NotFoundError extends aplication_error_1.ApplicationError {
    static withId(id) {
        return new NotFoundError(`Entity with ${id} not found.`);
    }
}
exports.NotFoundError = NotFoundError;
