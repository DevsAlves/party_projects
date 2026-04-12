const express = require("express");
const cors = require("cors");
const app = express();

// Configurações
app.use(cors());
app.use(express.json());

// Conexão com o banco
const conn = require("./db/conn");
conn();

// Rota base (IMPORTANTE)
app.get("/", (req, res) => {
  res.json({ message: "API online" });
});

// Routes
const routes = require("./routes/router");
app.use("/api", routes);

// Porta dinâmica (IMPORTANTE)
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Servidor funcionando na porta ${PORT}`);
});