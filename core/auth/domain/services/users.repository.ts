import { User } from "../model/user.entity";
import { Email } from "../model/value-objects/email";

export interface Users {
    findByEmail(email: Email): Promise<User>
    findByUsername(username: string): Promise<User>
}