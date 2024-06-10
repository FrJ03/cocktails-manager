export class Cocktail{
    constructor(
        private readonly _id: string,
        private readonly _name: string,
        private readonly _image: string
    ){}
    static create(
        id: string,
        name: string,
        image: string
    ): Cocktail | undefined{
        if(id !== '' && name !== '' && image !== ''){
            return new Cocktail(id, name, image)
        }
        else{
            return undefined
        }
    }

    get id(): string{
        return this._id
    }
    get name(): string{
        return this._name
    }
    get image(): string{
        return this._image
    }
}