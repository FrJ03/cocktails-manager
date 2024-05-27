import { describe, it, expect } from 'vitest'
import { UserResponse } from '../../../dto/responses/user.response'
import { userFactory } from '../users.factory'

describe('User factory', () => {
    describe('Create', () => {
        it('Valid user', () => {
            const userResponse = UserResponse.with({
                id: '1',
                username: 'test',
                email: 'test@test.es',
                password: 'test',
            })            

            const user = userFactory.create(userResponse)

            expect(user?.id).toBe(userResponse.id)
            expect(user?.username).toBe(userResponse.username)
            expect(user?.emailStr).toBe(userResponse.email)
            expect(user?.password).toBe(userResponse.password)
        })
        it('Invalid user', () => {
            const userResponse = UserResponse.with({
                id: '1',
                username: 'test',
                email: 'test@test',
                password: 'test',
            })            

            const user = userFactory.create(userResponse)

            expect(user).toBe(undefined)
        })
    })
})