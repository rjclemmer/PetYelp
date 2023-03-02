const { DataTypes } = require('sequelize/types');
const { Pet } = require('../models');
const sequelize = require('../config/config');

const petdata = [
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

];

const seedPet = () => Pet.bulkCreate(petdata);

module.exports = seedPet;
