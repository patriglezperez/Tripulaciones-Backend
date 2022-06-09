"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Store", {
      uuid_store: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      image_owner: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      owner_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      owner_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      store_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitude_coordinates: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      longitude_coordinates: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description_store: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image_store: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      store_phone_number: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      store_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      store_address: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      company_inscription: {
        type: DataTypes.STRING(9),
        allowNull: false,
        unique: true,
      },
      premium: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      product_type: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      modification_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      discharge_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Store");
  },
};
