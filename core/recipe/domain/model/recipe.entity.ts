import Ingredient from "./ingredient.entity";
import Step from "./step.entity";

export default class Recipe{
    constructor(
        private readonly _name: string,
        private readonly _ingredients: Array<Ingredient>,
        private readonly _steps: Array<Step>
    ){}
    get name(): string{
        return this._name
    }
    get ingredients(): Array<Ingredient>{
        return this._ingredients
    }
    get steps(): Array<Step>{
        return this._steps
    }
}