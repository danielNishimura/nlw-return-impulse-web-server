import express from 'express';
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET, POST, PUT, PATCH, DELETE

//GET = buscar informacoes
//POST = cadastrar informacao
//PUT =  atualizar informacoes de uma entidade
//PATCH = atualizar informacoes unica de uma entidade
//DELETE = deletar informacao

//modelo de rota
/*
app.get('/users', (rep, res) => {
    return res.send('Hello World');
});
*/

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server is running!');
});

//SQLite - banco de dados
//Prisma - ferramenta para facilitar operacao com banco de dados