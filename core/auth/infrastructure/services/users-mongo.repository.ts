import { Users } from '../../domain/services/users.repository';
import { Email } from '../../domain/model/value-objects/email';
import { User } from '../../domain/model/user.entity';
import { UserMongo } from '../persistence/user.type'
import { UserDataMapper } from '../persistence/user.data-mapper';
import { NotFoundError } from '../../../commons/domain/errors/not-found-error';

export class UsersMongo implements Users {
    async findByEmail(email: Email): Promise<User>{
        try{
            const user = await UserMongo.findOne({email: email.value}).lean()
            if(user !== null){
                return UserDataMapper.toModel(user)
            }
            else{
                throw new NotFoundError('user_email_not_found')
            }
        }
        catch{
            throw new NotFoundError('user_email_not_found')
        }
    }
    async findByUsername(username: string): Promise<User>{
        try{
            const user = await UserMongo.findOne({username: username}).lean()
            if(user !== null){
                return UserDataMapper.toModel(user)
            }
            else{
                throw new NotFoundError('user_email_not_found')
            }
        }
        catch{
            throw new NotFoundError('user_email_not_found')
        }
    }
}