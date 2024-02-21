'use strict';

const {  UsersModel  } = require('./users.model.js');
const {  PostsModel  } = require('./posts.model.js');
const { CommentsModel  } =  require('./comments.model.js');

UsersModel.hasMany(PostsModel, {  foreignKey: { name: 'user_id'  }, onDelete: 'SET NULL'});
PostsModel.belongsTo(UsersModel);
PostsModel.hasMany(CommentsModel, { foreignKey: { name: 'post_id'  }, onDelete: 'SET NULL'});
CommentsModel.belongsTo(PostsModel);
UsersModel.hasMany(CommentsModel, { foreignKey: { name: 'user_id'  }, onDelete: 'SET NULL'});
CommentsModel.belongsTo(UsersModel);

module.exports = {
  UsersModel,
  PostsModel,
  CommentsModel
}