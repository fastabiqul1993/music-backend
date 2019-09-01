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
          id: 1,
          name: "FG840",
          description:
            "Bagian belakang dan samping flamed maple menghasilkan tampilan yang khas, eksotik, dan mewah. Suaranya transparan dan masing-masing not dalam chord-nya jelas.",
          qty: 5,
          price: 500000,
          img:
            "https://id.yamaha.com/id/files/2A552D5E39AE4348A257E729B1658F81_12073_735x735_43ad73413c3c4722d57e0b15e60c6097.jpg",
          BranchId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "FG830",
          description:
            "Rich overtones dan sustain yang ditingkatkan berkat bagian belakang dan samping berbahan rosewood menghadirkan suara dengan depth yang lebih baik. Penampilan abalon inlay di sekitar lubang suara terlihat lebih mewah dan peningkatan spesifikasi yang jelas.",
          qty: 10,
          price: 650000,
          img:
            "https://id.yamaha.com/id/files/A3C3674FE2FA44869ACF464806029B7D_12073_735x735_4e9e43eafd27e94f7fea759e83fb86f6.jpg",
          BranchId: 4,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "CG192S",
          description:
            "Top of the line, the flagship model of this series.192 class offers highest satisfaction in sound quality and cosmetics. Mahogany neck, ebony fingerboard, Body binding inlay are the distinct differences from other models.",
          qty: 11,
          price: 575000,
          img:
            "https://id.yamaha.com/id/files/A7BC2EF52AED439B805A6DDE2A47A5C7_12073_735x735_f7d0a785eebf2b915779c30f24fbcc77.jpg",
          BranchId: 2,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: "CG182S",
          description:
            "Utilizing Rosewood on side / back, Ebony for fingerboard, CG182S is designed to achieve the classical guitar perfection.",
          qty: 15,
          price: 674000,
          img:
            "https://id.yamaha.com/id/files/1E6026C292FD4B64980CFFEA2A99CAC8_12073_735x735_90c0aa666dfe9a5aaeca7daf0d697fe5.jpg",
          BranchId: 3,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: "BB424",
          description:
            "Inheriting the sound and design of theBB2000 series basses it makes for an excellent entry-level instrument for up and coming Rock bassists. The lineup includes both 4 and 5-string models.",
          qty: 0,
          price: 230000,
          img:
            "https://id.yamaha.com/id/files/B047869D22A44D728EE8A9E54838FA44_12073_2000x6048_ad85ce54e3ca2370503c228ac0002690.jpg",
          BranchId: 5,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name: "BB425",
          description:
            "Inheriting the sound and design of theBB2000 series basses it makes for an excellent entry-level instrument for up and coming Rock bassists. The lineup includes both 4 and 5-string models.",
          qty: 7,
          price: 890000,
          img:
            "https://id.yamaha.com/id/files/CCE201D075CB41448F54F1B37D42D2C5_12073_2000x6048_1196dca6d8362c456929b692217265bd.jpg",
          BranchId: 1,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          name: "YVN500S",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 0,
          price: 475000,
          img:
            "https://www.yamaha.com/yamahavgn/PIM/Images/BAAD5109720944D6B071FDE3916D87B6_735x735_92d99224eb9c85264db4e0aa3e0619e8.jpg",
          BranchId: 4,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          name: "AVC5",
          description:
            "Based on the designs of Stradivarius and optimized with Yamaha’s A.R.E. technology, Yamaha’s flagship violin delivers the finest nuances required to create music. Enhancing the tone of the Stradivarius through the use of technology and the craftsman’s skill.",
          qty: 6,
          price: 376000,
          img:
            "https://www.yamaha.com/yamahavgn/PIM/Images/11355_12075_1_735x735_54d28d26a982f78b8a437a5e3a9f5766.jpg",
          BranchId: 2,
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
    return queryInterface.bulkDelete("Product", null, {});
  }
};
