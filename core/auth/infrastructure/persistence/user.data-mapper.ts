import { User } from "../../domain/model/user.entity";
import { Email } from "../../domain/model/value-objects/email";
import { UserType } from "./user.type";
import { FlattenMaps, ObjectId } from 'mongoose';

const UserDataMapper = {
    toModel: (user: FlattenMaps<UserType>): User => 
        new User(
            user._id.toString(),
            user.username,
            new Email(user.email),
            user.password
        )
} as const

export { UserDataMapper }