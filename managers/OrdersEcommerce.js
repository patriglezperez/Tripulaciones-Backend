"use strict";
const { Ordersecommerce } = require("../models");

async function CreateOrdersecommerce(params) {
  try {
    return Ordersecommerce.create(params);
  } catch (err) {
    console.log(err);
  }
}
async function FindOrdersecommerce(params) {
  try {
    return Ordersecommerce.findOne({ where: { params } });
  } catch (err) {
    console.log(err);
  }
}
async function FindAllOrdersecommerces() {
  try {
    return Ordersecommerce.findAll();
  } catch (err) {
    console.log(err);
  }
}
async function FindByParams(params) {
  try {
    return Ordersecommerce.findAll({ where: { params } });
  } catch (err) {
    console.log(err);
  }
}
async function UpdateOrdersecommerce(OrderId, EcommerceId, params) {
  try {
    return Ordersecommerce.update(
      { params },
      {
        where: { uuid_order: OrderId, uuid_ecommerce: EcommerceId },
      }
    );
  } catch (err) {
    console.log(err);
  }
}
async function DeleteOrdersecommerce(OrderId, EcommerceId) {
  try {
    return Ordersecommerce.destroy(
      { where: { uuid_order: OrderId } } && {
        where: { uuid_ecommerce: EcommerceId },
      }
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports(
  CreateOrdersecommerce,
  FindOrdersecommerce,
  FindAllOrdersecommerces,
  UpdateOrdersecommerce,
  FindByParams,
  DeleteOrdersecommerce
);
