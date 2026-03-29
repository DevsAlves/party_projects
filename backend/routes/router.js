const router = require("express").Router();

// Service Router
const serviceRouter = require("./services");
router.use("/", serviceRouter);

// Party Router
const partyRouter = require("./party");
router.use("/", partyRouter);

module.exports = router;
