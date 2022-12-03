'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matches extends Model {
    static associate(models) {
      Matches.belongsTo((models.Countries, { targetKey: 'countrykey', foreignKey: 'eventCountryKey' }));
      Matches.belongsTo((models.Leagues, { targetKey: 'leagueKey', foreignKey: 'leagueKey' }));
      Matches.hasMany(models.Statistics, { foreignKey: 'matchId' });
    }
  };
  Matches.init({
    eventDate: DataTypes.DATEONLY,
    eventTime: DataTypes.TIME,
    eventHome_team: DataTypes.STRING,
    eventAway_team: DataTypes.STRING,
    eventHalftimeResult: DataTypes.STRING,
    eventFinalResult: DataTypes.STRING,
    eventFtResult: DataTypes.STRING,
    eventPenalty_result: DataTypes.STRING,
    eventStatus: DataTypes.STRING,
    eventCountryKey: DataTypes.INTEGER,
    leagueKey: DataTypes.INTEGER,
    leagueRound: DataTypes.STRING,
    leagueSeason: DataTypes.STRING,
    eventStadium: DataTypes.STRING,
    eventReferee: DataTypes.STRING,
    eventHomeFormation: DataTypes.STRING,
    eventAwayFormation: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Matches',
  });
  return Matches;
};