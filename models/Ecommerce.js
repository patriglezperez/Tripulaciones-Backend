"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ecommerce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ OrdersEcommerce }) {
      // define association here
      this.hasMany(OrdersEcommerce, { foreignKey: "uuid_ecommerce" });
    }
  }
  Ecommerce.init(
    {
      uuid_ecommerce: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      description: {
        type: DataTypes.STRING,
      },
      national: {
        type: DataTypes.BOOLEAN,
      },
      modification_date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Ecommerce",
    }
  );
  return Ecommerce;
};
