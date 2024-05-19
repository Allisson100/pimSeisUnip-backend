"use strict";

const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Employees",
      [
        {
          uuid: uuidv4(),
          name: "Allisson Matheus",
          email: "allisson.boiane@outlook.com",
          password:
            "$2a$10$IQhOfDY7TIWM8dCBO1hdc.fUiiJ30MuTbecLOHTZGXTgeeVqzh3Za",
          rg: "123456789",
          cpf: "12345678910",
          cep: "08320040",
          permission_value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Employees", null, {});
  },
};
