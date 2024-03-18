const { User } = require('../models');

const userData =
[
  {
    "username": "kathy",
    "email": "kathy@gmail.com",
    "password": "password123"
  },
  {
    "username": "jake",
    "email": "jake@yahoo.com",
    "password": "password1"
  },
  {
    "username": "marisela",
    "email": "marisela@gmail.com",
    "password": "thisispw123"
  },
  {
    "username": "john",
    "email": "john@gmail.com",
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