"use strict";
const { Orders } = require("../models");

async function CreateOrders(params) {
  try {
    return Orders.create(params);
  } catch (err) {
    console.log(err);
  }
}
async function FindOrders(params) {
  try {
    return Orders.findOne({ where: { params } });
  } catch (err) {
    console.log(err);
  }
}
async function FindAllOrderss() {
  try {
    return Orders.findAll();
  } catch (err) {
    console.log(err);
  }
}
async function FindByParams(params) {
  try {
    return Orders.findAll({ where: { params } });
  } catch (err) {
    console.log(err);
  }
}
async function UpdateOrders(id, params) {
  try {
    return Orders.update(
      { params },
      {
        where: { uuid_order: id },
      }
    );
  } catch (err) {
    console.log(err);
  }
}
async function DeleteOrders(id) {
  try {
    return Orders.destroy({ where: { uuid_order: id } });
  } catch (err) {
    console.log(err);
  }
}

module.exports(
  CreateOrders,
  FindOrders,
  FindAllOrderss,
  UpdateOrders,
  FindByParams,
  DeleteOrders
);
