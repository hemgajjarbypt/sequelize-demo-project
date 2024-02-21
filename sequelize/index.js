const { Sequelize } = require('sequelize');
// const User = require('../models/user.js');
// const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize('project-sequelize', 'postgres', 'postgres123', {   
    host: 'localhost',
    dialect: 'postgres'
});

(async () => {
    try {
      // Synchronize all models with the database
      await sequelize.sync();
      console.log('Database synchronized successfully');
    } catch (error) {
      console.error('Error synchronizing database:', error);
    }
})();

module.exports = sequelize;