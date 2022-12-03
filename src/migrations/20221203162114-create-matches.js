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
      eventDate: {
        type: Sequelize.DATEONLY
      },
      eventTime: {
        type: Sequelize.TIME
      },
      eventHomeTeam: {
        type: Sequelize.STRING
      },
      eventAwayTeam: {
        type: Sequelize.STRING
      },
      eventhalftimeResult: {
        type: Sequelize.STRING
      },
      eventFinalResult: {
        type: Sequelize.STRING
      },
      eventFtResult: {
        type: Sequelize.STRING
      },
      eventPenaltyResult: {
        type: Sequelize.STRING
      },
      eventStatus: {
        type: Sequelize.STRING
      },
      eventCountryKey: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Countries', key: 'countryKey' }
      },
      leagueKey: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Leagues', key: 'leagueKey' }
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