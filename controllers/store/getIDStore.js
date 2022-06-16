const { FindStore } = require("../../managers/StoreManager");
const { FindByParams } = require("../../managers/AssessmentManager");
const processAssessment = require("../../utils/processAssessment")


/**
 * Store data recovery
 * @param {json} req -- req.params.Id = uuid_store
 * @returns {json} res
 */
async function getIDStore(req, res) {
    try {
        const store = await FindStore({"uuid_store": req.params.id});
        if (store) {
            // recovery assessment
            const assessment = await FindByParams({"uuid_store": req.params.id}); /// tendria q venir ordenado por fecha como coño se lo digo al equallizer
            const recoveryAssessment = assessment ? await processAssessment(assessment) : null;
            store.dataValues.assessment = recoveryAssessment;
            res.json({"store": store});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getIDStore;