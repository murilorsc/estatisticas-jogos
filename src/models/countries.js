'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    static associate(models) {
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