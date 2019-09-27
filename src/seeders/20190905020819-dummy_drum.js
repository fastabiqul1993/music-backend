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
          name: "DRM1",
          description:
            "Taxidermy poutine jianbing mumblecore vice cray cred quinoa umami tousled sustainable ennui XOXO. Next level plaid everyday carry ennui, raw denim narwhal direct trade. Wolf scenester readymade tumblr art party. Asymmetrical actually pinterest keytar fixie.",
          qty: 1,
          price: 500000,
          img: "http://pluspng.com/img-png/drum-hd-png-drum-png-1920.png",
          BranchId: 1,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "DRM2",
          description:
            "Taxidermy poutine jianbing mumblecore vice cray cred quinoa umami tousled sustainable ennui XOXO. Next level plaid everyday carry ennui, raw denim narwhal direct trade. Wolf scenester readymade tumblr art party. Asymmetrical actually pinterest keytar fixie.",
          qty: 0,
          price: 500000,
          img:
            "http://pluspng.com/img-png/drum-hd-png-file-drum-set-no-numbers-2-png-2281.png",
          BranchId: 2,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "DRM3",
          description:
            "Taxidermy poutine jianbing mumblecore vice cray cred quinoa umami tousled sustainable ennui XOXO. Next level plaid everyday carry ennui, raw denim narwhal direct trade. Wolf scenester readymade tumblr art party. Asymmetrical actually pinterest keytar fixie.",
          qty: 50,
          price: 500000,
          img:
            "http://pluspng.com/img-png/drum-hd-png-standard-features-and-custom-options-1964.png",
          BranchId: 3,
          CategoryId: 4,
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
