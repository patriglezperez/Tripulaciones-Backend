let router = require("express").Router();


router.get("/store", require("../controllers/assessment/getStoreIDAssessment"));
router.get("/client", require("../controllers/assessment/getClientIDAssessment"));

router.put("/", require("../controllers/assessment/putAssessment")); /* *** */

router.post("/new", require("../controllers/assessment/postNewAssessment")); 

module.exports = router;