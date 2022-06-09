"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrdersEcommerce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Orders, Ecommerce }) {
      // define association here
      this.belongsTo(Ecommerce, { foreignKey: "uuid_ecommerce" });
      this.belongsTo(Orders, { foreignKey: "uuid_order" });
    }
  }
  OrdersEcommerce.init(
    {
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrdersEcommerce",
    }
  );
  return OrdersEcommerce;
};
