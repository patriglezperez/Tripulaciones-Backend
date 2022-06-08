let router = require("express").Router();
router.post('/business', require('../controllers/business/postBusiness.js'));
router.use("/test", require("../controllers/prueba"));

module.exports = router;
