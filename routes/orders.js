let router = require("express").Router();


router.get("/store", require("../controllers/orders/getStoreIDOrders"));
router.get("/client", require("../controllers/orders/getClientIDOrders"));

router.patch("/", require("../controllers/orders/patchOrders")); /* *** */

router.post("/new", require("../controllers/orders/postNewOrders")); 

module.exports = router;