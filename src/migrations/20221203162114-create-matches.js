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
      eventCountryKey: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Countries', key: 'country_key' }
      },
      leagueKey: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Leagues', key: 'league_key' }
      },
      leagueRound: {
        type: Sequelize.STRING
      },
      leagueSeason: {
        type: Sequelize.STRING
      },
      eventStadium: {
        type: Sequelize.STRING
      },
      eventReferee: {
        type: Sequelize.STRING
      },
      eventHomeFormation: {
        type: Sequelize.STRING
      },
      eventAwayFormation: {
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