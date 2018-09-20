import dotenv from 'dotenv';
import express from 'express';
import Routes from './routes';

dotenv.config();
const app = express();

Routes(app);

app.listen(process.env.PORT);