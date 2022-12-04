'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    static associate(models) {
      Countries.hasMany(models.Leagues, { sourceKey: 'country_key', foreignKey: 'country_key' });
      Countries.hasMany(models.Matches, { sourceKey: 'country_key', foreignKey: 'event_country_key' });
    }
  }
  Countries.init({
    country_key: DataTypes.INTEGER,
    country_name: DataTypes.STRING,
    country_iso2: DataTypes.STRING,
    country_logo: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Countries',
  });
  return Countries;
};