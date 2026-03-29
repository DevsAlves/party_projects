const express = require("express"); // Cria servidores HTTP
const cors = require("cors"); //Requisições entre o back e o front (origens diferentes)
const app = express(); // Inicializa o APP

// Configurações
app.use(cors()); // Fazer requisições em outros domínios
app.use(express.json()); //Utilizar o JSON

// Conexão com o banco
const conn = require("./db/conn");

conn();

// Routes
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3000, function () {
  console.log("Servidor funcionando !!"); //Inicialização do servidor
});
