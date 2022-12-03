'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    static associate(models) {
      Countries.hasMany((models.Leagues, { sourceKey: 'countryKey', foreignKey: 'countryKey' }));
      Countries.hasMany((models.Matches, { sourceKey: 'countryKey', foreignKey: 'eventCountryKey' }));
    }
  }
  Countries.init({
    countryKey: DataTypes.INTEGER,
    countryName: DataTypes.STRING,
    countryIso: DataTypes.STRING,
    countryLogo: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Countries',
  });
  return Countries;
};