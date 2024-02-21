'use strict';

module.exports = {
  // Define the migration for creating the Users table
  up: (queryInterface, Sequelize) => {
    // Create the Users table with columns for id, firstName, lastName, email, password, createdAt, and updatedAt
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  // Define the migration for dropping the Users table
  down: (queryInterface, Sequelize) => {
    // Drop the Users table
    return queryInterface.dropTable('Users');
  }
};
