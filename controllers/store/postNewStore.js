const { FindStore, CreateStore } = require('../../managers/StoreManager');


/**
 * We add the data of a local
 * @param {json} req
 * @returns {json} res
 */
async function postNewStore(req, res) {
    try {
        const store = await FindStore({"uuid_store": req.user.uid});
        if (!store) {
            /// si existe actualizamos pero, si falla ??? los manager no me dicen nada :S
            await CreateStore(req.body)
            res.json();
        } else {
            res.status(400).json("Bad Request"); /// Creo q este pero me queda la duda :S
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = postNewStore;