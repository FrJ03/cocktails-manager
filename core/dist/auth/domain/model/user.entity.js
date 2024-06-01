"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const email_1 = require("./value-objects/email");
class User {
    constructor(_id, _username, _email, _password) {
        this._id = _id;
        this._username = _username;
        this._email = _email;
        this._password = _password;
    }
    static create(id, username, email, password) {
        const newEmail = email_1.Email.create(email);
        if (newEmail === undefined) {
            return undefined;
        }
        else {
            return new User(id, username, newEmail, password);
        }
    }
    get id() {
        return this._id;
    }
    get username() {
        return this._username;
    }
    get email() {
        return this._email;
    }
    get emailStr() {
        return this._email.value;
    }
    get password() {
        return this._password;
    }
}
exports.User = User;
