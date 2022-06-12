let router = require("express").Router();


router.get("/store/:id", require("../controllers/assessment/getStoreIDAssessment"));
router.get("/client/:id", require("../controllers/assessment/getClientIDAssessment"));

router.put("/:id", require("../controllers/assessment/putAssessment")); /* *** */

router.post("/new", require("../controllers/assessment/postNewAssessment")); 

module.exports = router;