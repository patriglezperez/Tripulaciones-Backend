let router = require("express").Router();


router.get("/:id", require("../controllers/ecommerce/getIDEcommerce"));
router.get("/all", require("../controllers/ecommerce/getAllEcommerce"));

router.patch("/:id", require("../controllers/ecommerce/patchEcommerce")); /* *** */

router.post("/new", require("../controllers/ecommerce/postNewEcommerce")); 

module.exports = router;