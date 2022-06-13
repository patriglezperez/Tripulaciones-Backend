"use strict";
const { Assessment } = require("../models");

async function CreateAssessment(params) {
  try {
    return Assessment.create(params);
  } catch (err) {
    console.log(err);
  }
}
async function FindAssessment(params) {
  try {
    return Assessment.findOne({ where: { params } });
  } catch (err) {
    console.log(err);
  }
}
async function FindAllAssessments() {
  try {
    return Assessment.findAll();
  } catch (err) {
    console.log(err);
  }
}
async function FindByParams(params) {
  try {
    return Assessment.findAll({ where: { params } });
  } catch (err) {
    console.log(err);
  }
}
async function UpdateAssessment(id, params) {
  try {
    return Assessment.update(
      { params },
      {
        where: { uuid_assessment: id },
      }
    );
  } catch (err) {
    console.log(err);
  }
}
async function DeleteAssessment(id) {
  try {
    return Assessment.destroy({ where: { uuid_assessment: id } });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  CreateAssessment,
  FindAssessment,
  FindAllAssessments,
  UpdateAssessment,
  FindByParams,
  DeleteAssessment,
};
