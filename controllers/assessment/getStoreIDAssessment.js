const { FindByParams } = require("../../managers/AssessmentManager");
const processAssessment = require("../../utils/processAssessment")


/**
 * Recovery of all Assessment associated with a store,
 * @param {json} req -- req.params.Id = uuidStore
 * @returns {json} res
 */
 async function getStoreIDAssessment(req, res) {
    try {
        /// tendria q venir ordenado por fecha como coño se lo digo al equallizer
        const assessment = await FindByParams({"uuid_store": req.params.Id});
        const recoveryAssessment = assessment ? processAssessment(assessment) : null
        if (assessment) {
            res.json({"assessment": recoveryAssessment});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getStoreIDAssessment;