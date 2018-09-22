import dotenv from 'dotenv';
import express from 'express';
import Routes from './routes';

dotenv.config();
const app = express();

Routes(app);

app.listen(process.env.PORT);
console.log(`server running on http://0.0.0.0:${process.env.PORT}`);