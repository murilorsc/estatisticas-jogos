'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leagues extends Model {
    static associate(models) {
      Leagues.belongsTo((models.Countries, { targetKey: 'countryKey', foreignKey: 'countryKey' }));
      Leagues.hasMany((models.Matches, { sourceKey: 'leagueKey', foreignKey: 'leagueKey' }));
    }
  }
  Leagues.init({
    leagueKey: DataTypes.INTEGER,
    leagueName: DataTypes.STRING,
    countryKey: DataTypes.INTEGER,
    leagueLogo: DataTypes.STRING,
    countryLogo: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Leagues',
  });
  return Leagues;
};