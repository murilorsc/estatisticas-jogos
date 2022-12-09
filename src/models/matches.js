'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matches extends Model {
    static associate(models) {
      Matches.hasMany(models.Goalscorers, { foreignKey: 'match_id' });
      Matches.hasMany(models.Statistics, { foreignKey: 'match_id' });
    }
  };
  Matches.init({
    event_key: DataTypes.INTEGER,
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
    event_live: DataTypes.STRING,
    event_stadium: DataTypes.STRING,
    event_referee: DataTypes.STRING,
    home_team_logo: DataTypes.STRING,
    away_team_logo: DataTypes.STRING,
    league_logo: DataTypes.STRING,
    country_logo: DataTypes.STRING,
    event_home_formation: DataTypes.STRING,
    event_away_formation: DataTypes.STRING,
    stage_name: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Matches',
  });
  return Matches;
};