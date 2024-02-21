'use strict';

const { DataTypes } = require('sequelize');
const db = require('../sequelize/index.js');


const PostsModel = db.define('Post', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    title: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    db,
    timestamps: true,
    underscored: true,
    tableName: 'posts',
    indexes: [
        {
            name: 'POST_PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [
                { name: "id" }
            ]
        },
        {
            name: 'p_user_id',
            unique: false,
            using: 'BTREE',
            fields: [
                { name: 'user_id' }
            ]
        }
    ]
});

module.exports = { PostsModel };
