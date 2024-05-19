"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employees.belongsTo(models.Permissions, { foreignKey: "value" });
    }
  }
  Employees.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      rg: DataTypes.STRING,
      cpf: DataTypes.STRING,
      cep: DataTypes.STRING,
      permission_value: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "Employees",
    }
  );
  return Employees;
};
