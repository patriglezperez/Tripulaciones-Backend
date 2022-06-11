const { FindStore, UpdateStore } = require('../../managers/StoreManager');


/**
 * We modify the data of a local
 * @param {json} req
 * @returns {json} res
 */
async function patchStore(req, res) {
    try {
        const { uuidStore } = req.body;
        const store = await FindStore({"uuid_store": uuidStore});
        if (store) {
            /// si existe actualizamos pero, si falla ??? los manager no me dicen nada :S
            await UpdateStore(uuidStore, req.body)
            res.json();
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = patchStore;