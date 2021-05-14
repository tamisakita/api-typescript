import * as express from 'express';
import userRoutes from './routes/user.routes';

const app = express();

app.use(express.json());
app.use('/', userRoutes);

app.listen(3001, () => {
  console.log('Server rodando na porta 3001');
});

export default app;
