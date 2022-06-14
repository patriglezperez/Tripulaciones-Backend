const { FindClient } = require("../../managers/ClientManager");

/**
 * Client data recovery
 * @param {json} req -- req.user.uid = uuid_client
 * @returns {json} res
 */
 async function getIDClient(req, res) {
    try {
        const client = await FindClient({"uuid_client": req.user.uid});
        
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