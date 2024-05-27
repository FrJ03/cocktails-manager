export class Email {
    constructor(public readonly value: string){}

    public static create(email: string): Email | null{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!email || !emailRegex.test(email)){
            return null
        }
        return new Email(email)
    }
}