const { FindByParams, UpdateAssessment } = require("../../managers/AssessmentManager");

/**
 * Update Assessment associated with a store,
 * @param {json} req -- req.body = uuid_assessment, valor_assessment, text_assessment
 * @returns {json} res
 */
 async function putAssessment(req, res) {
    try {
        const { uuid_assessment } = req.body
        const assessment = await FindByParams({"uuid_assessment": uuid_assessment});
        if (assessment) {
            await UpdateAssessment(uuid_assessment, req.body)
            res.json();
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = putAssessment;