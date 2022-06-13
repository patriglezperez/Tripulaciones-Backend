let router = require("express").Router();


router.get("/id", require("../controllers/client/getIDClient"));

router.put("/green", require("../controllers/client/putGreenPoints")); /* *** */

router.patch("/", require("../controllers/client/patchClient")); /* *** */

router.post("/new", require("../controllers/client/postNewClient")); 

module.exports = router;