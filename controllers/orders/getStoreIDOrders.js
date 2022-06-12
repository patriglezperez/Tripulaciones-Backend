const { FindByParams } = require("../../managers/OrdersManager");
const { FindByParams } = require("../../managers/OrdersEcommerce");

/**
 * We recover all data from the Table orders associated with a local
 * @param {json} req -- req.params.Id = uuid_store
 * @returns {json} res
 */
 async function getStoreIDOrders(req, res) {
    try {
        const orders = await FindByParams({"uuid_store": req.params.Id}); /// orders
        
        if (orders) {
            res.json({"orders": orders});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getStoreIDOrders;