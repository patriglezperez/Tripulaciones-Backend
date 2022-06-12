const { FindClient } = require("../../managers/ClientManager");

/**
 * Client data recovery
 * @param {json} req -- req.params.Id = uuid_client
 * @returns {json} res
 */
 async function getIDClient(req, res) {
    try {
        const uuidClient = req.params.Id;
        const client = await FindClient({"uuid_client": uuidClient});
        
        if (client) {
            res.json({"client": client});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getIDClient;