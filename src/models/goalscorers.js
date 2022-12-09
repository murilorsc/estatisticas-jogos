'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goalscorers extends Model {
    static associate(models) {
      Goalscorers.belongsTo(models.Matches, { foreignKey: 'match_id' });
    }
  }
  Goalscorers.init({
    match_id: DataTypes.INTEGER,
    event_key: DataTypes.INTEGER,
    time: DataTypes.STRING,
    home_scorer: DataTypes.STRING,
    home_assist: DataTypes.STRING,
    score: DataTypes.STRING,
    away_scorer: DataTypes.STRING,
    away_assist: DataTypes.STRING,
    info: DataTypes.STRING,
    info_time: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Goalscorers',
  });
  return Goalscorers;
};