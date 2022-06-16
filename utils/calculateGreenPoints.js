const { FindEcommerce } = require("../managers/EcommerceManager");

/**
 * we calculate how screwed you have the future
 * @param {object} order list
 * @returns {float} greenPoints
 */
async function calculateGreenPoints(order) {  
    try { 
        let greenPoints = 0.0;
        console.log("flipo con tus mierdas JS"); 
        const kaka = await order.forEach(async (e) => {
            let ecommerce = await FindEcommerce({"uuid_ecommerce": e.uuid_ecommerce}); /// orders ecommerce
            console.log("ecommerce-green:", ecommerce.dataValues.price);
            console.log("order-one: ", e.amount)
            greenPoints += ecommerce ? (ecommerce.dataValues.price * e.amount) : 0;
            console.log("greenPoints-calculate: ",greenPoints )
        })
        await Promise.all(kaka);
        console.log("greenPoints-salida: ",greenPoints )
        return greenPoints
    } catch (err) {
        /* la jodimos */
    }
    //console.log("greenPoints-salida: ",greenPoints )

}

module.exports = calculateGreenPoints;