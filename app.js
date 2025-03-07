import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import userdetailsRouter from './routes/userdetails.routes.js';

import connectToDatabase from './database/mongodb.js'
import errorMiddleware from './middlewares/error.middleware.js'
import arcjetMiddleware from './middlewares/arcjet.middleware.js'


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/users-details', userdetailsRouter);

app.use(errorMiddleware);



app.listen(PORT, async () => {
  console.log(` API is running on http://localhost:${PORT}`);

  await connectToDatabase();
});

export default app;