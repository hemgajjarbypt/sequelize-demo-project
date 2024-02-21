const { DataTypes } = require('sequelize');
const db = require('../sequelize/index.js');

const CommentsModel = db.define('Comment', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUID,
        unique: false,
        allowNull: false
    },
    post_id: {
        type: DataTypes.UUID,
        unique: false,
        allowNull: false
    }
}, {
    db,
    timestamps: true,
    underscored: true,
    tableName: 'comments',
    indexes: [
        {
            name: 'COMMENT_PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [
                {  name: 'id' }
            ]
        },
        {
            name: 'c_user_id',
            unique: false,
            using: 'BTREE',
            fields: [
                {  name: 'user_id' }
            ]
        },
        {
            name: 'c_post_id',
            unique: false,
            using: 'BTREE',
            fields: [
                {  name: 'post_id' }
            ]
        }
    ]
});


module.exports = { CommentsModel };