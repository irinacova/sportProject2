'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert(
         'Sports',
         [
             {
                 name: 'polo'
             },
             {
                 name: 'football'
             },
             {
                 name: 'basketball'
             }
         ],
         {}
     );

  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Sports', null, {});
  
  }
};
