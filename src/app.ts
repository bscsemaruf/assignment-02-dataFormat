import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { usersRouter } from './app/config/modules/users/users.route';
const app: Application = express();
// parsers
app.use(express.json());
app.use(cors());

app.use('/api/users', usersRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Connection is ok',
  });
});

export default app;
