const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// importar as rotas
const personagemRoutes = require('./routes/personagemRoutes');

//Middlewares
app.use(express.json()); // receber JSON no body
app.use(cors()); // liberando CORS

//rotas
app.use('/api', personagemRoutes);


//Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});