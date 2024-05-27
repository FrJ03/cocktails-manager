import { Email } from "./value-objects/email";

export class User{
    constructor(
        private _id: string,
        private _username: string,
        private _email: Email,
        private _password: string
    ){}

    static create(
        id: string,
        username: string,
        email: string,
        password: string
    ): User | null{
        const newEmail = Email.create(email)
        if(newEmail === null){
            return null
        }
        else{
            return new User(id, username, newEmail, password)
        }
    }

    get id(): string{
        return this._id
    }
    get username(): string{
        return this._username
    }
    get email(): Email{
        return this._email
    }
    get emailStr(): string{
        return this._email.value
    }
    get password(): string{
        return this._password
    }
}