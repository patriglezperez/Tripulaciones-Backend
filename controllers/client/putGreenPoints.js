const { FindClient } = require("../../managers/ClientManager"); ///

/**
 * Client data update
 * @param {json} req -- req.user.uid = uuid_client
 * @returns {json} res
 */
 async function putGreenPoints(req, res) {
    try {
        const client = await FindClient({"uuid_client": req.user.uid});
        
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