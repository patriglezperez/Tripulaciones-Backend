const { FindClient } = require("../../managers/ClientManager"); ///

/**
 * Client data update
 * @param {json} req -- req.params.Id = uuid_client
 * @returns {json} res
 */
 async function putGreenPoints(req, res) {
    try {
        const { uuidClient } = req.body;
        const client = await FindClient({"uuid_client": uuidClient});
        
        if (client) {
            /// update
            res.json();
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = putGreenPoints;