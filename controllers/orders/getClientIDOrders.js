const { FindByParams } = require("../../managers/OrdersManager");
const processOrdersEcommerce = require("../../utils/processOrdersEcommerce");


/**
 * We recover all data from the Table orders associated with a client
 * @param {json} req -- req.user.uid = uuid_client
 * @returns {json} res
 */
 async function getClientIDOrders(req, res) {
    let orders;
    try {
        orders = await FindByParams({"uuid_client": req.user.uid}); /// orders
        // process orders ecommerce 
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

module.exports = getClientIDOrders;