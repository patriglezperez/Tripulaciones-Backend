const { FindByParams } = require("../managers/OrdersEcommerce");

/**
 * we process the order and retrieve the list of elements that make it up
 * @param {object} order list
 * @returns {object} order list + order ecommerce
 */
 async function processOrdersEcommerce(orders) {
    try {
        orders.forEach(async (e,i) => {
            const ordersEcommerce = await FindByParams({"uuid_order": e.uuid_order}); /// orders ecommerce
            orders[i].ordersEcommerce = ordersEcommerce ? ordersEcommerce : null;
        })
    } catch (err) {
        /* la jodimos */
    }
    return orders
}

module.exports = processOrdersEcommerce;