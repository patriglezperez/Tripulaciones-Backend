const { FindByParams } = require("../../managers/OrdersManager");
const processOrdersEcommerce = require("../../utils/processOrdersEcommerce");


/**
 * We recover all data from the Table orders associated with a local
 * @param {json} req -- req.user.uid = uuid_store
 * @returns {json} res
 */
 async function getStoreIDOrders(req, res) {
    let orders;
    try {
        orders = await FindByParams({"uuid_store": req.user.uid}); /// orders
        /// proceso orders ecommerce 
        orders.ordersFull = orders ? await processOrdersEcommerce(orders) : null;
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