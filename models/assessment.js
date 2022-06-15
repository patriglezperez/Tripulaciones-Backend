"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Assessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Store, Client }) {
      // define association here
      this.belongsTo(Store, { foreignKey: "uuid_store" });
      this.belongsTo(Client, { foreignKey: "uuid_client" });
    }
  }
  Assessment.init(
    {
      uuid_assessment: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      tier_assessment: {
        type: DataTypes.BOOLEAN,
      },
      uuid_father_assessment: {
        type: DataTypes.STRING(255),
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
    },
    {
      sequelize,
      modelName: "Assessment",
      tableName: "Assessment",
    }
  );
  return Assessment;
};
