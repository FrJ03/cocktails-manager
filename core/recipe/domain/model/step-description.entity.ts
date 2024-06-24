export default class StepDescription{
    constructor(
        private readonly _description: string
    ){}
    static create(
        description: string
    ): StepDescription | undefined{
        if(description.includes('\n') || description.includes('\t')){
            return undefined
        }
        else{
            return new StepDescription(description)
        }
    }
    get description(): string{
        return this._description
    }
}