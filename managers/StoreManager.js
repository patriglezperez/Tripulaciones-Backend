"use strict";
const { Store } = require("../models");

async function CreateStore(params) {
  try {
    return Store.create(params);
  } catch (err) {
    console.log(err);
  }
}
async function FindStore(params) {
  try {
    return Store.findOne({ where: { params } });
  } catch (err) {
    console.log(err);
  }
}
async function FindAllStores() {
  try {
    return Store.findAll();
  } catch (err) {
    console.log(err);
  }
}

async function FindAllStoresWhere(params) {
  try {
    return Store.findAll({ where: { params } });
  } catch (err) {
    console.log(err);
  }
}

async function UpdateStore(id, params) {
  try {
    return Store.update(
      { params },
      {
        where: { uuid_store: id },
      }
    );
  } catch (err) {
    console.log(err);
  }
}
async function DeleteStore(id) {
  try {
    return Store.destroy({ where: { uuid_store: id } });
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  CreateStore,
  FindStore,
  FindAllStores,
  FindAllStoresWhere,
  UpdateStore,
  DeleteStore
};
