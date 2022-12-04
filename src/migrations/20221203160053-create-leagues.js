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
      league_key: {
        type: Sequelize.INTEGER,
        unique: true
      },
      league_name: {
        type: Sequelize.STRING
      },
      country_key: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Countries', key: 'country_key' }
      },
      league_logo: {
        type: Sequelize.STRING
      },
      country_logo: {
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