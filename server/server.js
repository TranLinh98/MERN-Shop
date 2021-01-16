import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import connectDb from './config/db.js';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config({ path: './config.env' });
const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

//development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//connect DB
connectDb();

//api routes
routes(app);

//error middleware
app.use(notFound);
app.use(errorHandler);

// listen
app.listen(port, () =>
  console.log(
    `Server run in ${process.env.NODE_ENV} mode on localhost:${port}`.yellow
      .bold
  )
);
