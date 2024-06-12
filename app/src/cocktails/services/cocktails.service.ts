import axios from 'axios'

const baseUrl = '/api/cocktails'

interface CocktailsGetAllResponse{
    cocktails: Array<{
        id: string,
        name: string,
        image: string
    }>
}

const getAll = async (token: string): Promise<CocktailsGetAllResponse | undefined> => {
    try {
        const response = await axios.get(baseUrl, {headers: {authorization: token}})

        return response.data as CocktailsGetAllResponse
    } catch (error: any) {
        console.error(error.response.status)
    }
    
}

export { getAll }
export type { CocktailsGetAllResponse }