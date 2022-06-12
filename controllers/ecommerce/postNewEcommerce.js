const { FindEcommerce, CreateEcommerce } = require("../../managers/EcommerceManager");

/**
 * Create Ecommerce associated with a store,
 * @param {json} req 
 * @returns {json} res
 */
 async function postNewEcommerce(req, res) {
    try {
        const ecommerce = await FindEcommerce({"uuid_ecommerce": req.body.uuid_ecommerce});
        if (!ecommerce) {
            await CreateEcommerce(req.body)
            res.json();
        } else {
            res.status(400).json("Bad Request"); /// Creo q este pero me queda la duda :S
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = postNewEcommerce;