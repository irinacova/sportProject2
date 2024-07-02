'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
        'UserSports',
        [
            {
                userId: 2,
                sportId: 1
            },
            {
                userId: 3,
                sportId: 2
            },
            {
                userId: 2,
                sportId: 2
            },
        ],
        {}
    );

  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('UserSports', null, {});
  
  }
};
