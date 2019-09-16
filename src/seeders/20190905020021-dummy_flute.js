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
          name: "FSCV1",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 5,
          price: 376000,
          img:
            "http://www.pngmart.com/files/6/Flute-Transparent-Background.png",
          BranchId: 1,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FSCV2",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 0,
          price: 376000,
          img: "http://www.pngmart.com/files/6/Flute-PNG-Photo.png",
          BranchId: 2,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FSCV3",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 0,
          price: 376000,
          img: "http://www.pngmart.com/files/6/Flute-Transparent-PNG.png",
          BranchId: 3,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FSCV4",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 0,
          price: 376000,
          img: "http://www.pngmart.com/files/6/Flute-PNG-Clipart.png",
          BranchId: 4,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FSCV5",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 0,
          price: 376000,
          img: "http://www.pngmart.com/files/6/Flute-PNG-Clipart.png",
          BranchId: 4,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FSCV6",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 0,
          price: 376000,
          img: "http://www.pngmart.com/files/6/Flute-Transparent-PNG.png",
          BranchId: 3,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FSCV7",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 5,
          price: 376000,
          img: "http://www.pngmart.com/files/6/Flute-PNG-Photo.png",
          BranchId: 2,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FSCV8",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 10,
          price: 376000,
          img:
            "http://www.pngmart.com/files/6/Flute-Transparent-Background.png",
          BranchId: 1,
          CategoryId: 3,
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
