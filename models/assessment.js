"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class assessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Client, Store }) {
      // define association here
      this.belongsTo(Client, { foreignKey: "uuid_client " });
      this.belongsTo(Store, { foreignKey: "uuid_store " });
    }
  }
  assessment.init(
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
      valor_assessment: {
        type: DataTypes.FLOAT(6),
      },
      text_assessment: {},
      modification_date: {},
      discharge_date: {},
    },
    {
      sequelize,
      modelName: "assessment",
    }
  );
  return assessment;
};
