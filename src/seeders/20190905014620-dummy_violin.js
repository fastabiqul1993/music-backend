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
      "Products",
      [
        {
          name: "AVC1",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 5,
          price: 376000,
          img: "http://www.pngmart.com/files/1/Violin-PNG-File.png",
          BranchId: 1,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AVC2",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 0,
          price: 376000,
          img:
            "http://www.pngmart.com/files/1/Violin-PNG-Transparent-Image.png",
          BranchId: 2,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AVC3",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 5,
          price: 376000,
          img: "http://www.pngmart.com/files/1/Violin-PNG-Photos.png",
          BranchId: 3,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AVC4",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 0,
          price: 376000,
          img: "http://www.pngmart.com/files/1/Violin-PNG-Clipart.png",
          BranchId: 4,
          CategoryId: 2,
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
    return queryInterface.bulkDelete("Products", null, {});
  }
};
