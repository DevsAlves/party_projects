// Importa o Router do Express para criar rotas separadas
const router = require("express").Router();

// Importa o controller responsável pelos serviços
const partyController = require("../controllers/partyController");

// Define a rota "/party"
router.route("/party").post((req, res) => partyController.create(req, res));
router.route("/party").get((req, res) => partyController.getAll(req, res));
router.route("/party/:id").get((req, res) => partyController.get(req, res));
router
  .route("/party/:id")
  .delete((req, res) => partyController.delete(req, res));
router.route("/party/:id").put((req, res) => partyController.update(req, res));

// Exporta o router para ser usado no app principal (ex: app.js ou server.js)
module.exports = router;
