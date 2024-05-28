import mongoose, { ObjectId } from 'mongoose'

export interface UserType{
    _id: ObjectId
    username: string,
    email: string,
    password: string
}

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const UserMongo = mongoose.model<UserType>('User', UserSchema) 

export { UserMongo, UserSchema } 