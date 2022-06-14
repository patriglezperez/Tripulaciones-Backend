const { FindClient } = require("../../managers/ClientManager");
const { FindStore } = require("../../managers/StoreManager");

/**
 * Client or Store
 * @param {json} req -- req.user.uid = uuid_client or uuid_store
 * @returns {json} res
 */
 async function getIDClient(req, res) {
    try {
        const store = await FindStore({"uuid_store": req.user.uid});
        const client = await FindClient({"uuid_client": req.user.uid});
        
        if (client) {
            res.json({"client": client});
        } 
        
        if (store) {
            res.json({"store": store});
        }

        res.status(404).json("Not found");
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getIDClient;