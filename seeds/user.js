const { User } = require('../models');

const userData =
[
  {
    "username": "kathy1",
    "email": "kathy@gmail.com",
    "password": "password123"
  },
  {
    "username": "Aliciaescalante",
    "email": "Aliciaescalante@yahoo.com",
    "password": "password1"
  },
  {
    "username": "Lalalisalove",
    "email": "Lalalisalove@gmail.com",
    "password": "thisispw123"
  },
  {
    "username": "Mllucas",
    "email": "Mllucas@gmail.com",
    "password": "PWD123"
  },
  {
    "username": "laura",
    "email": "laura@gmail.com",
    "password": "passcode1234"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;