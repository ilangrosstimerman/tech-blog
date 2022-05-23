const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: '127.0.0.1',
    username: 'root',
    password: "Nate050220",
    database: "tech_blog_db",
      dialect: 'mysql',
      port: 5000
    });

module.exports = sequelize;