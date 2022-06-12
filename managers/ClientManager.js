"use strict";
const { Client } = require("../models");

async function CreateClient(params) {
  try {
    return Client.create(params);
  } catch (err) {
    console.log(err);
  }
}
async function FindClient(params) {
  try {
    return Client.findOne({ where: { params } });
  } catch (err) {
    console.log(err);
  }
}
async function FindAllClients() {
  try {
    return Client.findAll();
  } catch (err) {
    console.log(err);
  }
}
async function FindByParams(params) {
  try {
    return Client.findAll({ where: { params } });
  } catch (err) {
    console.log(err);
  }
}
async function UpdateClient(id, params) {
  try {
    return Client.update(
      { params },
      {
        where: { uuid_client: id },
      }
    );
  } catch (err) {
    console.log(err);
  }
}
async function DeleteClient(id) {
  try {
    return Client.destroy({ where: { uuid_client: id } });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  CreateClient,
  FindClient,
  FindAllClients,
  FindByParams,
  UpdateClient,
  DeleteClient,
};
