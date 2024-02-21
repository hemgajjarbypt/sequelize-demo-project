'use strict';

const { DataTypes } = require('sequelize');
const db = require('../sequelize/index.js');


const UsersModel = db.define('User', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  db,
  underscored: true,
  tableName: 'users',
  timestamps: true,
  paranoid: true,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'id' }
      ]
    },
    {
      name: 'user_name',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'user_name' }
      ]
    }
  ]
});

module.exports = { UsersModel };