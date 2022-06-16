"use strict";
const { OrdersEcommerce } = require("../models");

async function CreateOrdersEcommerce(params) {
  try {
    console.log("params_manager: ", params)
    return OrdersEcommerce.create(params);
  } catch (err) {
    console.log(err);
  }
}
async function FindOrdersEcommerce(params) {
  try {
    return OrdersEcommerce.findOne({ where: params });
  } catch (err) {
    console.log(err);
  }
}
async function FindAllOrdersEcommerces() {
  try {
    return OrdersEcommerce.findAll();
  } catch (err) {
    console.log(err);
  }
}
async function FindByParams(params) {
  try {
    return OrdersEcommerce.findAll({ where: params });
  } catch (err) {
    console.log(err);
  }
}
async function UpdateOrdersEcommerce(OrderId, EcommerceId, params) {
  try {
    return OrdersEcommerce.update(
      params,
      {
        where: OrderId, uuid_ecommerce: EcommerceId ,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
async function DeleteOrdersEcommerce(OrderId) {
  try {
    return OrdersEcommerce.destroy({
      where: OrderId ,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  CreateOrdersEcommerce,
  FindOrdersEcommerce,
  FindAllOrdersEcommerces,
  UpdateOrdersEcommerce,
  FindByParams,
  DeleteOrdersEcommerce,
};
