const { Model, DataTypes } = require('sequelize/types');
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
);

module.exports = Pet;
