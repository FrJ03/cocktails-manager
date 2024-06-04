"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMongo = void 0;
const user_type_1 = require("../persistence/user.type");
const user_data_mapper_1 = require("../persistence/user.data-mapper");
const not_found_error_1 = require("../../../commons/domain/errors/not-found-error");
class UsersMongo {
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_type_1.UserMongo.findOne({ email: email.value }).lean();
                if (user !== null) {
                    return user_data_mapper_1.UserDataMapper.toModel(user);
                }
                else {
                    throw new not_found_error_1.NotFoundError('user_email_not_found');
                }
            }
            catch (_a) {
                throw new not_found_error_1.NotFoundError('user_email_not_found');
            }
        });
    }
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_type_1.UserMongo.findOne({ username: username }).lean();
                if (user !== null) {
                    return user_data_mapper_1.UserDataMapper.toModel(user);
                }
                else {
                    throw new not_found_error_1.NotFoundError('user_email_not_found');
                }
            }
            catch (_a) {
                throw new not_found_error_1.NotFoundError('user_email_not_found');
            }
        });
    }
}
exports.UsersMongo = UsersMongo;
