export default class Ingredient{
    constructor(
        private readonly _name: string,
        private readonly _quantity: number,
        private readonly _units: string
    ){}
    get name(): string{
        return this._name
    }
    get quantity(): number{
        return this._quantity
    }
    get units(): string{
        return this._units
    }
}