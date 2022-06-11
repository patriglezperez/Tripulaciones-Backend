const FindAllStores = require('../../managers/StoreManager');


/**
 * Data recovery of all stores
 * @param {json} req
 * @returns {json} res
 */
async function getAllStore(req, res) {
    try {
        const allStore = await FindAllStores();
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