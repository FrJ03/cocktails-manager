import StepDescription from "./step-description.entity"
import StepOrder from "./step-order.entity"

export default class Step{
    constructor(
        private readonly _order: StepOrder,
        private readonly _description: StepDescription
    ){}
    get order(): number{
        return this._order.order
    }
    get description(): string{
        return this._description.description
    }
}