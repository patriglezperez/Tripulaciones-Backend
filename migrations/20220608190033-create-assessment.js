"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Assessments", {
      uuid_assessment: {
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
      tier_assessment: {
        type: DataTypes.BOOLEAN,
      },
      uuid_father_assessment: {
        type: DataTypes.UUID,
      },
      value_assessment: {
        type: DataTypes.FLOAT(6),
      },
      text_assessment: {
        type: DataTypes.STRING(255),
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
    await queryInterface.dropTable("Assessments");
  },
};
