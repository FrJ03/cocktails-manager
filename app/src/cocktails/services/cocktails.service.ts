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

const deleteCocktail = async (id: string, token: string): Promise<Boolean> => {
    try {
        const response = await axios.delete(`${baseUrl}/?id=${id}`, {headers: {authorization: token}})

        return response.status === 200
    } catch (error: any) {
        console.error(error.response.status)
        return false
    }
}

export { getAll, deleteCocktail}
export type { CocktailsGetAllResponse }