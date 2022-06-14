const { FindAllEcommerces } = require("../../managers/EcommerceManager");

/**
 * Update all data recovery
 * @param {json} req 
 * @returns {json} res
 */
 async function getAllEcommerce(req, res) {
    try {
        const ecommerce = await FindAllEcommerces();
        
        if (ecommerce) {
            res.json({"ecommerce": ecommerce});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getAllEcommerce;