const { UpdateOrders } = require("../../managers/OrdersManager");
const { CreateOrdersecommerce, DeleteOrdersecommerce } = require("../../managers/EcommerceManager");

/**
 * We recover all data from the Table orders associated with a client
 * @param {json} req -- req.params.Id = uuid_client
 * @returns {json} res
 */
 async function patchOrders(req, res) {
    try {
        const orders = await UpdateOrders(req.body.uuid_order, 
            {"uuid_order": req.body.uuid_order, 
            "uuid_store": req.body.uuid_store,
            "uuid_client": req.body.uuid_client,
            "order_date": req.body.order_date,}); /// orders
        /// proceso orders ecommerce 
        /// necesitamos delete de todos "uuid_order" y volver a insertar
        //const ordersFull = orders ? await processOrdersEcommerce(orders) : orders;
        if (orders) {
            res.json({"orders": ordersFull});
        } else {
            res.status(404).json("Not found");
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = patchOrders;