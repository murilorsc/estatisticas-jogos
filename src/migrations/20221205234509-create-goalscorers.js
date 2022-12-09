'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Goalscorers', {
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
      event_key: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.STRING
      },
      home_scorer: {
        type: Sequelize.STRING
      },
      home_assist: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.STRING
      },
      away_scorer: {
        type: Sequelize.STRING
      },
      away_assist: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
      },
      info_time: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Goalscorers');
  }
};