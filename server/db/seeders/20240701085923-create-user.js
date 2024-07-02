'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


     await queryInterface.bulkInsert(
         'Users',
         [
             {
                 firstName: 'Irina',
                 lastName: 'Koval',
                 email: 'kiva23@mail.ru',
                 password: 'sdfgh',
                 age: 30,
                 photo: 'photo'
             },
             {
                 firstName: 'Andrew',
                 lastName: 'Koval',
                 email: 'andr23@mail.ru',
                 password: 'sdfgh',
                 age: 35,
                 photo: 'photo'
             },
             {
                 firstName: 'Sasha',
                 lastName: 'Koval',
                 email: 'sasha23@mail.ru',
                 password: 'sdfgh',
                 age: 40,
                 photo: 'photo'
             }
         ],
         {}
     );
    
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
