import express from 'express';
import userRouter from './src/routes/user.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});