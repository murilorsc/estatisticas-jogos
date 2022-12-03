'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('typeStatistics', [
      {
        type: "Throw In",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Free Kick",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        type: "Goal Kick",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Attacks",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Dangerous Attacks",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "On Target",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Off Target",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Shots Total",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Shots On Goal",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Shots Off Goal",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Shots Blocked",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Shots Inside Box",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Shots Outside Box",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Fouls",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Corners",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Offsides",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Ball Possession",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Saves",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Passes Total",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Passes Accurate",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('typeStatistics', null, {});
  }
};
