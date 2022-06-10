"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init(
    {
      uuid_client: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      client_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      client_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_client: {
        type: DataTypes.STRING,
      },
      client_email: {
        type: DataTypes.STRING,
        allowNull: false,
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
      modelName: "Client",
    }
  );
  return Client;
};
