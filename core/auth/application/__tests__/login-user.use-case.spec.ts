import { beforeEach, afterEach, describe, expect, it } from "vitest";
import { UserMongo } from "../../infrastructure/persistence/user.type";
import { container } from "../../../commons/container/container";
import { LoginUserRequest } from "../../dto/requests/login-user.request";
import mongoose, { ObjectId } from "mongoose";
import * as config from '../../../commons/utils/config'
import bcrypt from 'bcrypt'

describe('LoginUserUseCase', async () => {
    const password = 'test'
    const passwordHash = await bcrypt.hash(password, 10)
    const userData = {
        username: 'test',
        email: 'test@test.es',
        password: passwordHash
    }
    let userId: ObjectId
    beforeEach(async () => {
        await mongoose.connect(config.MONGODB_URI || '');

        const user = new UserMongo(userData)

        const userdbres = await user.save()

        userId = userdbres._id
    })
    it('should log the user', async () => {
        const userRequest: LoginUserRequest = {
            email: userData.email,
            password: password
        }
        const userResponse = await container.loginUser.with(userRequest)

        expect(userResponse.code).toBe(200)
        expect(userResponse.email).toBe(userData.email)
        expect(userResponse.username).toBe(userData.username)
        expect(userResponse.token).not.toBeUndefined()
    })
    it('should not log the user: email not valid', async () => {
        const userRequest: LoginUserRequest = {
            email: 'test',
            password: password
        }
        const userResponse = await container.loginUser.with(userRequest)

        expect(userResponse.code).toBe(400)
        expect(userResponse.email).toBeUndefined()
        expect(userResponse.username).toBeUndefined()
        expect(userResponse.token).toBeUndefined()
    })
    it('should not log the user: incorrect email', async () => {
        const userRequest: LoginUserRequest = {
            email: 'test1@test.es',
            password: password
        }
        const userResponse = await container.loginUser.with(userRequest)

        expect(userResponse.code).toBe(404)
        expect(userResponse.email).toBeUndefined()
        expect(userResponse.username).toBeUndefined()
        expect(userResponse.token).toBeUndefined()
    })
    it('should not log the user: incorrect password', async () => {
        const userRequest: LoginUserRequest = {
            email: userData.email,
            password: password + '1'
        }
        const userResponse = await container.loginUser.with(userRequest)

        expect(userResponse.code).toBe(400)
    })
    afterEach(async () => {
        await UserMongo.deleteOne({_id: userId})
    })
})