"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Orders", {
      uuid_order: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      uuid_store: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "Store",
          },
          key: "uuid_store",
        },
      },
      uuid_client: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "Client",
          },
          key: "uuid_client",
        },
      },
      order_date: {
        type: DataTypes.DATE,
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
    await queryInterface.dropTable("Orders");
  },
};
