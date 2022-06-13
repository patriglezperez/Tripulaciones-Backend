const { FindClient, CreateClient } = require("../../managers/ClientManager"); ///

/**
 * We add the data of a client
 * @param {json} req 
 * @returns {json} res
 */
 async function postNewClient(req, res) {
    try {
        const { uuidClient } = req.body;
        const client = await FindClient({"uuid_client": uuidClient});
        
        if (!client) {
            /// si existe actualizamos pero, si falla ??? los manager no me dicen nada :S
            await CreateClient(req.body);
            res.json();
        } else {
            res.status(400).json("Bad Request"); /// Creo q este pero me queda la duda :S
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = postNewClient;