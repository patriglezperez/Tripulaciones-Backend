let router = require("express").Router();


router.get("/:id", require("../controllers/client/getIDClient"));

router.put("/:id", require("../controllers/client/putGreenPoints")); /* *** */

router.patch("/:id", require("../controllers/client/patchClient")); /* *** */

router.post("/new", require("../controllers/client/postNewClient")); 

module.exports = router;