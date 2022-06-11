const FindStore = require('../../managers/StoreManager');
const FindAssessment = require('../../managers/AssessmentManager');


/**
 * Recovery of all Assessment associated with a store,
 * If you have answers associated with that assessment, they go in the
 * resp field in array format with all associated rows.
 * Plus the average of all valuations that do not go to zero
 * @param {string} uuidStore = uuid_store
 * @returns {object} {average: float, data: 
 * {row completo de Table assessment, 
 * resp: [{row completo de Table assessment},{row completo de Table assessment}]},
 * {row completo de Table assessment, 
 * resp: null}
 */
async function recoveryAssessment(uuidStore) {
    try {

    } catch (err) {
        
    }
}

/**
 * Store data recovery
 * @param {json} req -- req.params.Id = uuid_store
 * @returns {json} res
 */
async function getIDStore(req, res) {
    try {
        const uuidStore = req.params.Id;
        const store = await FindStore({"uuid_store": uuidStore});
        // recovery assessment
        const assessment = recoveryAssessment(uuidStore);
        if (store) {
            res.json({"store": store});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getIDStore;