export class Email {
    constructor(public readonly value: string){}

    public static create(email: string): Email | undefined {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!email || !emailRegex.test(email)){
            return undefined
        }
        return new Email(email)
    }
}