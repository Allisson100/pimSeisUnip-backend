"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //     Sales.belongsTo(models.Permissions, {
      //     foreignKey: "permission_uuid",
      //     targetKey: "uuid",
      //   });
    }
  }
  Sales.init(
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      products: {
        type: DataTypes.JSON,
        defaultValue: [],
      },
      client_uuid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sale_status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      observations: {
        type: DataTypes.JSON,
        allowNull: [],
      },
    },
    {
      sequelize,
      modelName: "Sales",
    }
  );
  return Sales;
};
