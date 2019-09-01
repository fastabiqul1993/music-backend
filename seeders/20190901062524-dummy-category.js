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
      "Categories",
      [
        {
          id: 1,
          name: "guitar",
          img:
            "https://id.yamaha.com/id/files/2A552D5E39AE4348A257E729B1658F81_12073_735x735_43ad73413c3c4722d57e0b15e60c6097.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "violin",
          img:
            "https://www.yamaha.com/yamahavgn/PIM/Images/BAAD5109720944D6B071FDE3916D87B6_735x735_92d99224eb9c85264db4e0aa3e0619e8.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "ukulele",
          img:
            "https://id.yamaha.com/id/files/A7BC2EF52AED439B805A6DDE2A47A5C7_12073_735x735_f7d0a785eebf2b915779c30f24fbcc77.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: "bass",
          img:
            "https://id.yamaha.com/id/files/B047869D22A44D728EE8A9E54838FA44_12073_2000x6048_ad85ce54e3ca2370503c228ac0002690.jpg",
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
    return queryInterface.bulkDelete("Category", null, {});
  }
};
