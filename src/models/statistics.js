'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistics extends Model {
    static associate(models) {
      Statistics.belongsTo(models.Matches, { foreignKey: 'match_id' });
      Statistics.belongsTo(models.TypeStatistics, { foreignKey: 'type_id' });
    }
  }
  Statistics.init({
    type_id: DataTypes.INTEGER,
    match_id: DataTypes.INTEGER,
    home: DataTypes.INTEGER,
    away: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Statistics',
  });
  return Statistics;
};