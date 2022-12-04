'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeStatistics extends Model {

    static associate(models) {
      TypeStatistics.hasMany(models.Statistics, { foreignKey: 'type_id' });
    }
  }
  TypeStatistics.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'TypeStatistics',
  });
  return TypeStatistics;
};