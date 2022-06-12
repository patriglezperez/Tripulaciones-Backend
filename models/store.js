"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ Assessment, Orders }) {
      // define association here
      this.hasMany(Assessment, { foreignKey: "uuid_assessment" });
      this.hasMany(Orders, { foreignKey: "uuid_order" });
    }
  }
  Store.init(
    {
      uuid_store: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
      },
      image_owner: {
        type: DataTypes.STRING,
      },
      owner_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      owner_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      store_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitude_coordinates: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      longitude_coordinates: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description_store: {
        type: DataTypes.STRING,
      },
      image_store: {
        type: DataTypes.STRING,
      },
      store_phone_number: {
        type: DataTypes.STRING(20),
      },
      store_email: {
        type: DataTypes.STRING,
        validate: {
          is: emailRegex,
        },
        allowNull: false,
      },
      store_address: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      company_inscription: {
        type: DataTypes.STRING(9),
        allowNull: false,
        unique: true,
      },
      premium: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      product_type: {
        type: DataTypes.STRING(1),
        allowNull: false,
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
      modelName: "Store",
    }
  );
  return Store;
};
