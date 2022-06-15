"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Ecommerce", {
      uuid_ecommerce: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      image_ecommerce: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      product_type: DataTypes.STRING(1),
      price: {
        type: DataTypes.FLOAT,
      },
      description: {
        type: DataTypes.STRING(255),
      },
      national: {
        type: DataTypes.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Ecommerce");
  },
};
