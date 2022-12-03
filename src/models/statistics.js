'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistics extends Model {
    static associate(models) {
      Statistics.belongsTo(models.Matches, { foreignKey: 'matchiId' });
      Statistics.belongsTo(models.TypeStatistics, { foreignKey: 'typeId' });
    }
  }
  Statistics.init({
    typeId: DataTypes.INTEGER,
    matchiId: DataTypes.INTEGER,
    home: DataTypes.INTEGER,
    away: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Statistics',
  });
  return Statistics;
};