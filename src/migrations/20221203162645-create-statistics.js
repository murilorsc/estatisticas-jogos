'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Statistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      match_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Matches', key: 'id' }
      },
      type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'TypeStatistics', key: 'id' }
      },
      home: {
        type: Sequelize.INTEGER
      },
      away: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Statistics');
  }
};