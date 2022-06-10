"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Assessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Store }) {
      // define association here

      this.belongsTo(Store, { foreignKey: "uuid_store" });
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
        type: DataTypes.UUID,
      },
      value_assessment: {
        type: DataTypes.FLOAT(6),
      },
      text_assessment: {
        type: DataTypes.STRING(255),
      },
      modification_date: {
        type: DataTypes.DATE,
      },
      discharge_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Assessment",
    }
  );
  return Assessment;
};
