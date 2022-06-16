const { FindAllStores } = require("../../managers/StoreManager");
const { FindByParams } = require("../../managers/AssessmentManager");
const processAssessment = require("../../utils/processAssessment")

function between(min, max) {  
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

/**
 * Data recovery of all stores
 * @param {json} req
 * @returns {json} res
 */
async function getAllStore(req, res) {
    try {
        let allStore = await FindAllStores();
      
        if (allStore) {
            res.json({"allStore": allStore});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getAllStore;