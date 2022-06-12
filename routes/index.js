let router = require("express").Router();

/* TEST */
router.post('/business', require('../controllers/business/postBusiness.js'));
router.use("/test", require("../controllers/prueba"));


router.use('/store', require('./store'));
router.use('/client', require('./client'));
router.use('/assessment', require('./assessment'));
router.use('/ecommerce', require('./ecommerce'));
router.use('/orders', require('./orders'));

module.exports = router;
