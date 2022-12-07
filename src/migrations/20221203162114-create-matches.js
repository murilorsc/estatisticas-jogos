'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_key: {
        type: Sequelize.INTEGER
      },
      event_date: {
        type: Sequelize.DATEONLY
      },
      event_time: {
        type: Sequelize.TIME
      },
      event_home_team: {
        type: Sequelize.STRING
      },
      event_away_team: {
        type: Sequelize.STRING
      },
      event_halftime_result: {
        type: Sequelize.STRING
      },
      event_final_result: {
        type: Sequelize.STRING
      },
      event_ft_result: {
        type: Sequelize.STRING
      },
      event_penalty_result: {
        type: Sequelize.STRING
      },
      event_status: {
        type: Sequelize.STRING
      },
      event_country_key: {
        type: Sequelize.INTEGER
      },
      league_key: {
        type: Sequelize.INTEGER
      },
      league_round: {
        type: Sequelize.STRING
      },
      league_season: {
        type: Sequelize.STRING
      },
      event_stadium: {
        type: Sequelize.STRING
      },
      event_referee: {
        type: Sequelize.STRING
      },
      event_home_formation: {
        type: Sequelize.STRING
      },
      event_away_formation: {
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
    await queryInterface.dropTable('Matches');
  }
};