import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as config from './commons/utils/config'

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri: string = config.MONGODB_URI || '';

(async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch(error) {
        console.error(error);
    }
})();

const PORT: string | number = config.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});