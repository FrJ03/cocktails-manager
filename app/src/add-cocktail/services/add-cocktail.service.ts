import axios from "axios"

const baseUrl = '/api/cocktails'

const create = async (name: string, image: string, token: string) => {
    if(name == ''){
        return
    }
    else{
        if(image == ''){
            image = 'https://static.vecteezy.com/system/resources/previews/024/678/992/original/cocktail-summer-drink-black-white-error-404-flash-message-frozen-mint-mojito-with-straw-monochrome-empty-state-ui-design-page-not-found-popup-cartoon-image-flat-outline-illustration-concept-vector.jpg'
        }
        try {
            const response = await axios.post(baseUrl, {name: name, image:image}, {headers: {authorization: token}})
            
            return response.data
        } catch (error: any) {
            console.error(error.response.status)
        }
    }
}

export { create }