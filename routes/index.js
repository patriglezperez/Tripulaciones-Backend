let router = require("express").Router();

router.use("/test", require("../controllers/prueba"));

module.exports = router;
