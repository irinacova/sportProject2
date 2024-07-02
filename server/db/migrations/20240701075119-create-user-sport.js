'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserSports', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        sportId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Sports',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        createdAt: {
            allowNull: true,
            type: Sequelize.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: true,
            type: Sequelize.DATE,
            defaultValue: new Date()
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserSports');
  }
};
