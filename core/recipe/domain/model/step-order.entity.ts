export default class StepOrder{
    constructor(
        private readonly _order: number
    ){}
    static create(order: number): StepOrder | undefined{
        if(!Number.isInteger(order) || order < 1){
            return undefined
        }
        else{
            return new StepOrder(order)
        }
    }
    get order(): number{
        return this._order
    }
}