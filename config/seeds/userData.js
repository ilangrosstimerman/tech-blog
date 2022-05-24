const { User } = require('../../models');

const userdata =
[
  {
    "username": "SmashMouth",
    "password": "password"
  },
  {
    "username": "Shrek",
    "password": "password"
  },
  {
    "username": "AstroLounge",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;