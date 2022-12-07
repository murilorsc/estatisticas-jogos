'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistics extends Model {
    static associate(models) {
      Statistics.belongsTo(models.Matches, { foreignKey: 'match_id' });
    }
  }
  Statistics.init({
    match_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    home: DataTypes.INTEGER,
    away: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Statistics',
  });
  return Statistics;
};