let router = require("express").Router();


router.get("/", require("../controllers/store/getAllStore"));
router.get("/:id", require("../controllers/store/getIDStore"));

router.patch("/:id", require("../controllers/store/patchStore")); /* *** */

router.post("/new", require("../controllers/store/postNewStore")); 

module.exports = router;