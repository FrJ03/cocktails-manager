import dotenv from 'dotenv'

dotenv.config()

const ENV = process.env.ENV
const SECRET = process.env.SECRET
const SALT = process.env.SALT
const PORT = process.env.PORT
const MONGODB_URI = process.env.ENV === 'test' 
    ? process.env.MONGODB_TEST_URI
    : (process.env.ENV === 'dev') ?
        process.env.MONGODB_DEV_URI
        :
        process.env.MONGODB_PROD_URI

export {PORT, MONGODB_URI, SECRET, SALT, ENV}