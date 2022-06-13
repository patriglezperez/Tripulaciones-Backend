const { FindStore } = require("../../managers/StoreManager");
const { FindByParams } = require("../../managers/AssessmentManager");
const processAssessment = require("../../utils/processAssessment")


/**
 * Store data recovery
 * @param {json} req -- req.user.uid = uuid_store
 * @returns {json} res
 */
async function getIDStore(req, res) {
    try {
        const store = await FindStore({"uuid_store": req.user.uid});
        
        if (store) {
            // recovery assessment
            const assessment = await FindByParams({"uuid_store": req.user.uid}); /// tendria q venir ordenado por fecha como coño se lo digo al equallizer
            const recoveryAssessment = assessment ? processAssessment(assessment) : null
            store.assessment = recoveryAssessment;
            res.json({"store": store});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getIDStore;