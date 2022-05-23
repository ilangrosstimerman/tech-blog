const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost.',
      port: 3306,
      dialect: 'mysql',
      dialectOptions: {
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
      }
    });

module.exports = sequelize;