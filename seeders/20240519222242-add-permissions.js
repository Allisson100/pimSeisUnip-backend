"use strict";

const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Permissions",
      [
        {
          uuid: uuidv4(),
          endpoints: JSON.stringify({
            frontMenu: [
              "/",
              "/products",
              "/clients",
              "/employees",
              "/financial",
              "/adm",
              "/profile",
              "/cart",
            ],
            backPaths: [],
          }),
          name: "atendente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: uuidv4(),
          endpoints: JSON.stringify({
            frontMenu: [
              "/",
              "/products",
              "/clients",
              "/employees",
              "/financial",
              "/adm",
              "/profile",
              "/cart",
            ],
            backPaths: [],
          }),
          name: "estoquista",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: uuidv4(),
          endpoints: JSON.stringify({
            frontMenu: [
              "/",
              "/products",
              "/clients",
              "/employees",
              "/financial",
              "/adm",
              "/profile",
              "/cart",
            ],
            backPaths: [],
          }),
          name: "supervisor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Permissions", null, {});
  },
};
