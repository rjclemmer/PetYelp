const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Pet extends Model {}

Pet.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
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
