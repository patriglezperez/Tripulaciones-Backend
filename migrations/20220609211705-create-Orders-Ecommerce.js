"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("OrdersEcommerces", {
      uuid_order: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
          model: {
            tableName: "Orders",
          },
          key: "uuid_order",
        },
      },
      uuid_ecommerce: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
          model: {
            tableName: "Ecommerces",
          },
          key: "uuid_ecommerce",
        },
      },
      amount: {
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable("OrdersEcommerces");
  },
};
