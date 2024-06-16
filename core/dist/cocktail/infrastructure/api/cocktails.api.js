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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CocktailsRouter = void 0;
const express_1 = __importDefault(require("express"));
const container_1 = require("../../../commons/container/container");
const CocktailsRouter = express_1.default.Router();
exports.CocktailsRouter = CocktailsRouter;
CocktailsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cocktails = yield container_1.container.getCocktails.with();
    res.status(200).send(cocktails);
}));
CocktailsRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cocktail = {
        name: req.body.name,
        image: req.body.image
    };
    const isCreated = yield container_1.container.createCocktail.with(cocktail);
    if (isCreated) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(400);
    }
}));
