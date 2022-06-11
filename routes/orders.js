let router = require("express").Router();


router.get("/store/:id", require("../controllers/orders/getStoreIDOrders"));
router.get("/client/:id", require("../controllers/orders/getClientIDOrders"));

router.patch("/:id", require("../controllers/orders/patchOrders")); /* *** */

router.post("/new", require("../controllers/orders/postNewOrders")); 

module.exports = router;