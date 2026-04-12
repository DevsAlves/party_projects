# 📘 Party Projects

Aplicação full stack para gerenciamento de festas, com controle de orçamento e serviços associados.

## 📌 Visão Geral

O sistema permite:
- Criar festas com orçamento definido
- Adicionar serviços com custo
- Validar automaticamente o orçamento
- Listar, editar e excluir festas
- Gerenciar serviços

Arquitetura baseada em API REST + SPA (React).

## 🧱 Tecnologias
### Backend
- Node.js
- Express
- MongoDB
- Mongoose
### Frontend
- React (com Vite)
- Axios
- React Router DOM

## 📁 Estrutura do Projeto

### 🔹 Frontend 
```bash
/frontend
 ├── public/
 ├── src/
 │    ├── axios/
 │    │    └── config.js
 │    ├── components/
 │    │    └── NavBar.jsx
 │    ├── hook/
 │    ├── routes/
 │    │    ├── Home.jsx
 │    │    ├── Party.jsx
 │    │    ├── CreateParty.jsx
 │    │    └── EditParty.jsx
 │    ├── styles/
 │    ├── App.jsx
 │    └── main.jsx
 ├── index.html
 ├── package.json
 └── vite.config.js
```

### 🔹 Backend

```bash
/backend
 ├── controllers/
 │    ├── partyController.js
 │    └── serviceController.js
 ├── models/
 │    ├── Party.js
 │    └── Service.js
 ├── routes/
 │    ├── party.js
 │    ├── services.js
 │    └── router.js
 ├── db/
 │    └── conn.js
 └── app.js
```


## 🔌 API Endpoints

### 🎉 Party

| Método | Rota              | Descrição                  |
|--------|-------------------|---------------------------|
| GET    | /api/party        | Lista todas as festas     |
| GET    | /api/party/:id    | Busca uma festa           |
| POST   | /api/party        | Cria uma festa            |
| PUT    | /api/party/:id    | Atualiza uma festa        |
| DELETE | /api/party/:id    | Remove uma festa          |

---

### 🛠️ Services

| Método | Rota                | Descrição               |
|--------|---------------------|-------------------------|
| GET    | /api/services       | Lista serviços          |
| GET    | /api/services/:id   | Busca serviço           |
| POST   | /api/services       | Cria serviço            |
| PUT    | /api/services/:id   | Atualiza serviço        |
| DELETE | /api/services/:id   | Remove serviço          |


## ⚙️ Configuração
Variáveis de ambiente (backend)
```MONGO_URL=sua_string_do_mongodb```

## ▶️ Execução Local
```
Backend
npm install
npm start
Servidor padrão: http://localhost:3000
```
```
Frontend
npm install
npm run dev
```

## 🔄 Fluxo da Aplicação
- Usuário interage com React
- Axios faz requisição para http://localhost:3000/api
- Express processa a requisição
- Mongoose acessa o MongoDB
- Dados retornam em JSON

## ⚠️ Observações Técnicas
- Backend roda localmente via Express (app.listen)
- Frontend consome API via Axios
- Estrutura segue padrão MVC simplificado
- Validações críticas estão no backend
- Separação clara entre rotas, controllers e models


## 👨‍💻 Autor
Desenvolvido por DevAlves - Projeto baseado no curso de Matheus Battisti, com personalizações no design e ajustes durante a implementação.

