const { Pet } = require('../models');

const petdata = [
  {
    "petName": "Herbie",
    "filename": "01-pug-wearing-glasses.jpg"
  },
  {
    "petName": "Chipper",
    "filename": "02-grumpy-cat.jpg"
  },
  {
    "petName": "Chicken",
    "filename": "03-hairless-cat.jpg"
  },
  {
    "petName": "Mittens",
    "filename": "04-cozy-cat-in-blanket.jpg"
  },
  {
    "petName": "Cozmo",
    "filename": "05-backpack-cat.jpg"
  },
  {
    "petName": "Shreddder",
    "filename": "06-long-haired-chihuahua.jpg"
  },
  {
    "petName": "Frank",
    "filename": "07-smiley-cat.jpg"
  },
  {
    "petName": "Snickers",
    "filename": "08-expressive-pug.jpg"
  },
  {
    "petName": "Violette",
    "filename": "09-side-eye-frenchie.jpg"
  },
  {
    "petName": "Charlotte",
    "filename": "10-running-weimaraner.jpg"
  }
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;