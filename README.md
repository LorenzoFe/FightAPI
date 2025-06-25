# 🧠 API Fight - Backend (Node.js + Express + MySQL)

Este projeto é uma API REST para gerenciamento de personagens de luta. Ele permite realizar operações de CRUD (Create, Read, Update, Delete) com dados armazenados em um banco de dados MySQL. Cada personagem pode conter um nome, tipo, especial e uma imagem (URL pública, inclusive GIFs).

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express.js
- MySQL
- dotenv
- cors
- nodemon (dev)

---

## 🛠️ Instalação e execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```
### 2. Instale as pedendências
```bash
npm install
```
### 3. Configure o arquivo .env
```bash
DB_HOST=localhost
DB_USER=seu usuário
DB_PASS=sua senha
DB_NAME=fight
```
---

## 🗂️ Estrutura de Pastas
```bash
fight-api/
├── controllers/
│   └── personagemController.js    # Lógica das rotas (CRUD)
├── db.js                          # Conexão com MySQL
├── routes/
│   └── personagemRoutes.js        # Endpoints das rotas
├── .env                           # Variáveis de ambiente
├── .gitignore                     # Ignora node_modules e .env
├── index.js                       # Arquivo principal da aplicação
├── package.json                   # Dependências e scripts
├── package-lock.json              # Gerado pelo npm
└── README.md                      # Documentação do projeto
```
---
## 🧾 Criação do Banco de Dados
Acesse o MySQL e execute:
```bash
CREATE DATABASE fight;

USE fight;

CREATE TABLE personagem (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  tipo VARCHAR(100),
  especial VARCHAR(100),
  imagem TEXT
);
```
---

## ▶️ Execução da API
Inicie o servidor com
```bash
npm run dev
```
Servidor disponível em: http://localhost:3000
---
## 📡 Endpoints da API
prefixo base: /api/personagens

### 🔹 GET /api/personagens
Retorna todos os personagens

📥 Nenhum corpo necessário

📤 Exemplo de resposta
```bash
[
  {
    "id": 1,
    "name": "Ryu",
    "tipo": "Lutador",
    "especial": "Hadouken",
    "imagem": "https://exemplo.com/ryu.gif"
  }
]
```

## 🔹 GET /api/personagens/:id
Retorna um personagem pelo ID.

📥 Parâmetro: id

📤 Exemplo:
```bash
{
  "id": 1,
  "name": "Ryu",
  "tipo": "Lutador",
  "especial": "Hadouken",
  "imagem": "https://exemplo.com/ryu.gif"
}

```
## 🔹 POST /api/personagens
Cria um novo personagem

📥 Corpo JSON:
```bash
{
  "name": "Chun-Li",
  "tipo": "Lutadora",
  "especial": "Spinning Bird Kick",
  "imagem": "https://exemplo.com/chunli.gif"
}

```

📤 Resposta:

```bash
{
  "id": 2,
  "name": "Chun-Li",
  "tipo": "Lutadora",
  "especial": "Spinning Bird Kick",
  "imagem": "https://exemplo.com/chunli.gif"
}

```
## 🔹 PUT /api/personagens/:id
Atualiza um personagem existente

📥 Parâmetro: id

📥 Corpo JSON:
```bash
{
  "name": "Chun-Li",
  "tipo": "Lutadora",
  "especial": "Lightning Kick",
  "imagem": "https://exemplo.com/chunli2.gif"
}

```
📤 Resposta:
```bash
{
  "id": 2,
  "name": "Chun-Li",
  "tipo": "Lutadora",
  "especial": "Lightning Kick",
  "imagem": "https://exemplo.com/chunli2.gif"
}

```

## 🔹 DELETE /api/personagens/:id
Remove um personagem.
📥 Parâmetro: id

📤 Resposta:
```bash
{
  "message": "Personagem deletado com sucesso"
}

```

### 📌 Observações
O campo imagem armazena a URL pública da imagem (como as do Cloudinary).

É possível utilizar imagens PNG, JPEG ou GIFs animados.

A lógica de upload é feita no front-end (React) e apenas a URL é enviada para o back-end.

Ideal para estudos e prática de aplicações fullstack.

### 👨‍💻 Autores
Lorenzo Ferreira | Gabriel Henrique
Projeto acadêmico para fins educacionais com foco em Node.js, Express, MySQL e integração com front-end em React.


