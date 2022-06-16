"use strict";
const { Ecommerce } = require("../models");

async function CreateEcommerce(params) {
  try {
    return Ecommerce.create(params);
  } catch (err) {
    console.log(err);
  }
}
async function FindEcommerce(params) {
  try {
    return Ecommerce.findOne({ where: params });
  } catch (err) {
    console.log(err);
  }
}
async function FindAllEcommerces() {
  try {
    return Ecommerce.findAll();
  } catch (err) {
    console.log(err);
  }
}
async function FindByParams(params) {
  try {
    return Ecommerce.findAll({ where: params });
  } catch (err) {
    console.log(err);
  }
}
async function UpdateEcommerce(id, params) {
  try {
    return Ecommerce.update(
      params,
      {
        where: id ,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
async function DeleteEcommerce(id) {
  try {
    return Ecommerce.destroy({ where: id });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  CreateEcommerce,
  FindEcommerce,
  FindAllEcommerces,
  UpdateEcommerce,
  FindByParams,
  DeleteEcommerce,
};
