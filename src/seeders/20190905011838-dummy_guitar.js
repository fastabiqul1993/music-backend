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
          name: "FG841",
          description:
            "Taxidermy poutine jianbing mumblecore vice cray cred quinoa umami tousled sustainable ennui XOXO. Next level plaid everyday carry ennui, raw denim narwhal direct trade. Wolf scenester readymade tumblr art party. Asymmetrical actually pinterest keytar fixie.",
          qty: 0,
          price: 500000,
          img: "http://www.pngmart.com/files/1/Cartoon-Guitar-Clip-Art-PNG.png",
          BranchId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FG842",
          description:
            "Taxidermy poutine jianbing mumblecore vice cray cred quinoa umami tousled sustainable ennui XOXO. Next level plaid everyday carry ennui, raw denim narwhal direct trade. Wolf scenester readymade tumblr art party. Asymmetrical actually pinterest keytar fixie.",
          qty: 10,
          price: 500000,
          img: "http://www.pngmart.com/files/1/Electric-Guitar-PNG.png",
          BranchId: 2,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FG843",
          description:
            "Taxidermy poutine jianbing mumblecore vice cray cred quinoa umami tousled sustainable ennui XOXO. Next level plaid everyday carry ennui, raw denim narwhal direct trade. Wolf scenester readymade tumblr art party. Asymmetrical actually pinterest keytar fixie.",
          qty: 0,
          price: 500000,
          img:
            "http://www.pngmart.com/files/1/Electric-Guitar-Vector-Icon-PNG.png",
          BranchId: 3,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FG844",
          description:
            "Taxidermy poutine jianbing mumblecore vice cray cred quinoa umami tousled sustainable ennui XOXO. Next level plaid everyday carry ennui, raw denim narwhal direct trade. Wolf scenester readymade tumblr art party. Asymmetrical actually pinterest keytar fixie.",
          qty: 8,
          price: 500000,
          img: "http://www.pngmart.com/files/1/Red-Guitar-PNG.png",
          BranchId: 4,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
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
