import axios from 'axios'

const baseUrl = '/api/cocktails'

interface CocktailsGetAllResponse{
    cocktails: [
        id: string,
        name: string,
        image: string
    ]
}

const getAll = async (token: string): Promise<CocktailsGetAllResponse> => {
    const response = await axios.get(baseUrl, {headers: {authorization: token}})

    return response.data as CocktailsGetAllResponse
}

export { getAll }
export type { CocktailsGetAllResponse }