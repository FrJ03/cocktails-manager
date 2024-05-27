import {describe, it, expect} from 'vitest'
import { Email } from '../email'

describe('Email', () => {
    describe('Create', () => {
        it('Correct email', () => {
            const validEmail = 'example@example.es'

            const email = Email.create(validEmail)

            expect(email).toBeInstanceOf(Email)
            expect(email?.value).toBe(validEmail)
        })
        it('Incorrect email: empty email', () => {
            const invalidEmail = ''

            const email = Email.create(invalidEmail)

            expect(email).toBe(undefined)
        })
        it('Incorrect email: without @', () => {
            const invalidEmail = 'example.es'

            const email = Email.create(invalidEmail)

            expect(email).toBe(undefined)
        })
        it('Incorrect email: without .', () => {
            const invalidEmail = 'example@example'

            const email = Email.create(invalidEmail)

            expect(email).toBe(undefined)
        })
        it('Incorrect email: ending with .', () => {
            const invalidEmail = 'example@example.'

            const email = Email.create(invalidEmail)

            expect(email).toBe(undefined)
        })
    })
})