const { FindByParams, CreateAssessment } = require("../../managers/AssessmentManager");

/**
 * Create Assessment associated with a store,
 * @param {json} req -- req.body = uuid_store, uuid_client, valor_assessment, text_assessment, uuid_father_assessment
 * @returns {json} res
 */
 async function postNewAssessment(req, res) {
    try {
        const assessment = await FindByParams({"uuid_assessment": req.body.uuid_assessment});
        if (!assessment) {
            await CreateAssessment(req.body)
            res.json();
        } else {
            res.status(400).json("Bad Request"); /// Creo q este pero me queda la duda :S
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = postNewAssessment;