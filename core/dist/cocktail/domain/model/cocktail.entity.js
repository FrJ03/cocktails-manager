"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cocktail = void 0;
class Cocktail {
    constructor(_id, _name, _image) {
        this._id = _id;
        this._name = _name;
        this._image = _image;
    }
    static create(id, name, image) {
        if (id !== '' && name !== '' && image !== '') {
            return new Cocktail(id, name, image);
        }
        else {
            return undefined;
        }
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get image() {
        return this._image;
    }
}
exports.Cocktail = Cocktail;
