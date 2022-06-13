let router = require("express").Router();


router.get("/all", require("../controllers/store/getAllStore"));
router.get("/id", require("../controllers/store/getIDStore"));

router.patch("/", require("../controllers/store/patchStore")); /* *** */

router.post("/new", require("../controllers/store/postNewStore")); 

module.exports = router;