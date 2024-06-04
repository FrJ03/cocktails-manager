import { expect, test} from "@playwright/test";
import axios from 'axios'

test.describe('Logout tests', () => {
    const port = 5173
    const baseUrl = 'http://localhost'
    const url = `${baseUrl}:${port}`

    test.beforeAll(async () => {
        const userData = {
            username: 'test',
            email: 'test@test.es',
            password: 'test'
        }

        await axios.post(`${baseUrl}:4000/api/test/auth`, userData)
    })
    test('logout button to be visible', async ({page}) => {
        await page.goto(url)

        await page.getByTestId('email-input').fill('test@test.es')
        await page.getByTestId('password-input').fill('test')
        await page.getByTestId('log-button').click()

        await page.reload()

        expect(page.getByTestId('logout-button')).toBeVisible()
    })
    test.describe('With a logged user', () => {
        test.beforeEach(async ({page}) => {
            await page.goto(url)

            await page.getByTestId('email-input').fill('test@test.es')
            await page.getByTestId('password-input').fill('test')
            await page.getByTestId('log-button').click()
        })
        test('Logout user', async ({page}) => {
            await page.getByTestId('logout-button').click()
            expect(page.getByTestId('log-button')).toBeVisible()
        })
    })
    test.afterEach(async ({context}) => {
        await context.clearCookies({name: 'loggedUser'})
    })
    test.afterAll(async () => {
        await axios.delete(`${baseUrl}:4000/api/test/auth`)
    })
})