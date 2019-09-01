"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Branches",
      [
        {
          id: 1,
          name: "Malang",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "Jogja",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "Jakarta",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: "Batu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: "Bandung",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Branch", null, {});
  }
};
