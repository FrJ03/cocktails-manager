import axios from "axios"

interface AuthData{
    user: {
        email: string | undefined
        username: string | undefined
    }
    token: string | undefined
    code: number
}

const baseUrl: string = '/api/login'

const auth = async (email: string, password: string): Promise<AuthData> => {
    try {
        const response = await axios.post(`${baseUrl}`, {
            email: email,
            password: password
        })
    
        return {
            user: {
                email: response.data.email,
                username: response.data.username
            },
            token: response.data.token,
            code: response.data.code

        } as unknown as AuthData
    } catch (error: any) {
        return {
            user: {
                email: undefined,
                password: undefined
            },
            token: undefined,
            code: error.code

        } as unknown as AuthData
    }
}

export { auth }
export type {AuthData}