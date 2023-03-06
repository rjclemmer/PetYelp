const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Pet extends Model {}

Pet.init(
  {
    petName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'pet',
  }
);

module.exports = Pet;
