import { UserResponse } from "../../dto/responses/user.response";
import { User } from "./user.entity";

export const userFactory = {
    create: (userResponse: UserResponse): User | undefined => {
        return User.create(
            userResponse.id,
            userResponse.username,
            userResponse.email,
            userResponse.password
        )
    }
}