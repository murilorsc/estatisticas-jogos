'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leagues extends Model {
    static associate(models) {
      Leagues.belongsTo(models.Countries, { targetKey: 'country_key', foreignKey: 'country_key' });
      Leagues.hasMany(models.Matches, { sourceKey: 'league_key', foreignKey: 'league_key' });
    }
  }
  Leagues.init({
    league_key: DataTypes.INTEGER,
    league_name: DataTypes.STRING,
    country_key: DataTypes.INTEGER,
    league_logo: DataTypes.STRING,
    country_logo: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Leagues',
  });
  return Leagues;
};