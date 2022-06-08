"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("client", {
      uuid_client: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      client_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      client_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_client: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      client_email: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable("client");
  },
};
