
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

// Sets up relationship between tables and allow in Sequelize
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: "cascade"
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: "cascade"
})

module.exports = { User, Post, Comment };