const { FindByParams } = require("../../managers/OrdersManager");
const processOrdersEcommerce = require("../../utils/processOrdersEcommerce");


/**
 * We recover all data from the Table orders associated with a local
 * @param {json} req -- req.params.Id = uuid_store
 * @returns {json} res
 */
 async function getStoreIDOrders(req, res) {
    try {
        const orders = await FindByParams({"uuid_store": req.params.Id}); /// orders
        /// proceso orders ecommerce 
        const ordersFull = orders ? await processOrdersEcommerce(orders) : orders;
        if (orders) {
            res.json({"orders": ordersFull});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = getStoreIDOrders;