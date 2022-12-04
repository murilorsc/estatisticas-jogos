'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matches extends Model {
    static associate(models) {
      Matches.belongsTo(models.Countries, { targetKey: 'country_key', foreignKey: 'event_country_key' });
      Matches.belongsTo(models.Leagues, { targetKey: 'league_key', foreignKey: 'league_key' });
      Matches.hasMany(models.Statistics, { foreignKey: 'match_id' });
    }
  };
  Matches.init({
    event_date: DataTypes.DATEONLY,
    event_time: DataTypes.TIME,
    event_home_team: DataTypes.STRING,
    event_away_team: DataTypes.STRING,
    event_halftime_result: DataTypes.STRING,
    event_final_result: DataTypes.STRING,
    event_ft_result: DataTypes.STRING,
    event_penalty_result: DataTypes.STRING,
    event_status: DataTypes.STRING,
    event_country_key: DataTypes.INTEGER,
    league_key: DataTypes.INTEGER,
    league_round: DataTypes.STRING,
    league_season: DataTypes.STRING,
    event_stadium: DataTypes.STRING,
    event_referee: DataTypes.STRING,
    event_home_formation: DataTypes.STRING,
    event_away_formation: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Matches',
  });
  return Matches;
};