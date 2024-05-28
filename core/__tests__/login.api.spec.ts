import { describe, expect, it, beforeEach, afterEach } from "vitest";
import bcrypt from 'bcrypt'
import { UserMongo } from '../auth/infrastructure/persistence/user.type'
import mongoose, {ObjectId} from "mongoose";
import * as config from '../commons/utils/config'
import { app } from "../app";
import supertest from "supertest";

const api = supertest(app)

describe('LoginAPI', async () => {
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
        const userRequest = {
            email: userData.email,
            password: password
        }

        const response = await api
            .post('/api/login')
            .send(userRequest)
            .expect(200)

        expect(response.body).toHaveProperty('token')
        expect(response.body).toHaveProperty('email', userData.email)
        expect(response.body).toHaveProperty('username', userData.username)
    })
    it('should not log the user: email not valid', async () => {
        const userRequest = {
            email: 'test',
            password: password
        }
        const response = await api
            .post('/api/login')
            .send(userRequest)
            .expect(400)
    })
    it('should not log the user: incorrect email', async () => {
        const userRequest = {
            email: 'test1@test.es',
            password: password
        }
        
        const response = await api
            .post('/api/login')
            .send(userRequest)
            .expect(404)
    })
    it('should not log the user: incorrect password', async () => {
        const userRequest = {
            email: userData.email,
            password: password + '1'
        }

        const response = await api
            .post('/api/login')
            .send(userRequest)
            .expect(400)
    })
    afterEach(async () => {
        await UserMongo.deleteOne({_id: userId})
    })
})