// Importa o Router do Express para criar rotas separadas
const router = require("express").Router();

// Importa o controller responsável pelos serviços
const serviceController = require("../controllers/serviceController");

// Define a rota "/services"
router.route("/services").post((req, res) => serviceController.create(req, res));

router.route("/services").get((req, res) => serviceController.getAll(req, res));

router.route("/services/:id").get((req, res) => serviceController.get(req, res));

router.route("/services/:id").delete((req, res) => serviceController.delete(req, res));

router.route("/services/:id").put((req, res) => serviceController.update(req, res));


// Exporta o router para ser usado no app principal (ex: app.js ou server.js)
module.exports = router;
