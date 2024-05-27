import { describe, it, expect } from 'vitest'
import { User } from '../user.entity'
import { Email } from '../value-objects/email'

describe('User', () => {
    describe('Create', () => {
        it('Constructor', () => {
            const id = '1'
            const username = 'test'
            const email = new Email('test@test.es')
            const password = 'test'

            const user = new User(id, username, email, password)

            expect(user).toBeInstanceOf(User)
            expect(user?.id).toBe(id)
            expect(user?.username).toBe(username)
            expect(user?.email).toBe(email)
            expect(user?.password).toBe(password)
        })
        it('Valid user', () => {
            const id = '1'
            const username = 'test'
            const email = 'test@test.es'
            const password = 'test'

            const user = User.create(id, username, email, password)

            expect(user).toBeInstanceOf(User)
            expect(user?.id).toBe(id)
            expect(user?.username).toBe(username)
            expect(user?.emailStr).toBe(email)
            expect(user?.password).toBe(password)
        })
        it('Invalid user', () => {
            const id = '1'
            const username = 'test'
            const email = 'test@test.'
            const password = 'test'

            const user = User.create(id, username, email, password)

            expect(user).toBe(null)
        })
    })
})