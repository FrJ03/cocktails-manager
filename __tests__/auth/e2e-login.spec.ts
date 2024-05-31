import { expect, test} from "@playwright/test";
import axios from 'axios'

test.describe('Login tests', () => {
    test.beforeAll(async () => {
        const userData = {
            username: 'test',
            email: 'test@test.es',
            password: 'test'
        }

        await axios.post('http://localhost:4000/api/test/auth', userData)
    })
    test('Checking redirection', async ({page}) => {
        await page.goto('http://localhost:3000')

        expect(page.url()).toBe('http://localhost:3000/auth')

    })
    test('Wrong user data', async ({page}) => {
        await page.goto('http://localhost:3000/auth')

        await page.getByTestId('email-input').fill('wrong@email.es')
        await page.getByTestId('password-input').fill('test')
        await page.getByTestId('log-button').click()

        expect(page.getByTestId('log-button')).toBeVisible()
    })
    test('Correct user data', async ({page, context}) => {

        await page.goto('http://localhost:3000/auth')

        await page.getByTestId('email-input').fill('test@test.es')
        await page.getByTestId('password-input').fill('test')
        await page.getByTestId('log-button').click()
        await page.reload()

        console.log(await page.content())

        expect(await page.getByTestId('log-button')).toBeVisible()
    })
    test.afterEach(async ({context}) => {
        await context.clearCookies({name: 'loggedUser'})
    })
    test.afterAll(async () => {
        await axios.delete('http://localhost:4000/api/test/auth')
    })
})