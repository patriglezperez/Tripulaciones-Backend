const { CreateOrders } = require("../../managers/OrdersManager");
const { CreateOrdersEcommerce } = require("../../managers/OrdersEcommerce");


/**
 * Add an order to the tables
 * @param {json} req body: {row complete orders,
 *          order: [row complete orders_ecommerce, row complete orders_ecommerce]}
 * @returns {json} res
 */
async function postNewOrders(req, res) {
    try {
        const orders = await CreateOrders({"uuid_order": req.body.uuid_order, 
                                            "uuid_store": req.body.uuid_store,
                                            "uuid_client": req.body.uuid_client,
                                            "order_date": req.body.order_date,}); // orders
        // process orders ecommerce 
        req.body.order.forEach(async e => { await CreateOrdersEcommerce(e); })
        if (orders) {
            res.json();
        } else {
            res.status(400).json("Bad Request"); /// Creo q este pero me queda la duda :S
        }
    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = postNewOrders;