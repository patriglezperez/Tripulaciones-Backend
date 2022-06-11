const { FindEcommerce } = require("../../managers/EcommerceManager");

/**
 * Ecommerce data recovery
 * @param {json} req -- req.params.Id = uuid_ecommerce
 * @returns {json} res
 */
 async function getIDEcommerce(req, res) {
    try {
        const ecommerce = await FindEcommerce({"uuid_ecommerce": req.params.Id});
        
        if (ecommerce) {
            res.json({"ecommerce": ecommerce});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getIDEcommerce;