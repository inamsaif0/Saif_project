const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql', // Change this to your database type if needed
});

module.exports = sequelize;
