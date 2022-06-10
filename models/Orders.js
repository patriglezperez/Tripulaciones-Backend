"use strict";
const { Model } = require("sequelize");
const ordersecommerce = require("./ordersecommerce");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Store, OrdersEcommerce, Client }) {
      // define association here
      this.belongsTo(Store, { foreignKey: "uuid_store" });
      this.belongsTo(Client, { foreignKey: "uuid_client " });
      this.hasMany(OrdersEcommerce, { foreignKey: "uuid_order" });
    }
  }
  Orders.init(
    {
      uuid_order: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
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
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
