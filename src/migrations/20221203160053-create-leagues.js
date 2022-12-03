'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leagues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      leagueKey: {
        type: Sequelize.INTEGER,
        unique: true
      },
      leagueName: {
        type: Sequelize.STRING
      },
      countryKey: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Countries', key: 'countryKey' }
      },
      leagueLogo: {
        type: Sequelize.STRING
      },
      countryLogo: {
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
    await queryInterface.dropTable('Leagues');
  }
};