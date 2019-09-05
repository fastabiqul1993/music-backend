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
          img: "http://www.pngmart.com/files/1/Cartoon-Guitar-Clip-Art-PNG.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "violin",
          img: "http://www.pngmart.com/files/1/Violin-PNG-File.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "flute",
          img:
            "http://www.pngmart.com/files/6/Flute-Transparent-Background.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: "drum",
          img: "http://pluspng.com/img-png/drum-hd-png-drum-png-1920.png",
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
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
