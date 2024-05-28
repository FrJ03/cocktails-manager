import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as config from './commons/utils/config'
import { LoginRouter } from './auth/infrastructure/api/login.api'

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/login', LoginRouter)

const uri: string = config.MONGODB_URI || '';

(async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch(error) {
        console.error(error);
    }
})();

export { app }