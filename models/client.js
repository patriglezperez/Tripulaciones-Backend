"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Orders, Assessment }) {
      // define association here
      this.hasMany(Orders, { foreignKey: "uuid_client" });
      this.hasMany(Assessment, { foreignKey: "uuid_client" });
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
      client_email: {
        type: DataTypes.STRING,
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
      modelName: "Client",
    }
  );
  return Client;
};
