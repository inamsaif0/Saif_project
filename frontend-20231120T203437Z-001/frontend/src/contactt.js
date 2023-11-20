const { DataTypes } = require('sequelize');
const sequelize = require('./db'); // Import your Sequelize instance

const Contact = sequelize.define('contact', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectname: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.TEXT,
  },
});

module.exports = Contact;
