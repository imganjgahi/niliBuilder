const Sequelize = require('sequelize');
const sequelize = require('../db/mysqlDatabase');
const Category = require("./blog/category");
const Post = require("./blog/post");
const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.TINYINT,
        defaultValue: 1
    },
    avatar: {
        type: Sequelize.STRING,
        defaultValue: "avatar.jpg"
    }

})


User.hasMany(Category,{as: 'categories', foreignKey: 'userId'});
Category.belongsTo(User, {foreignKey: 'userId'});

User.hasMany(Post,{as: 'posts', foreignKey: 'userId'});
Post.belongsTo(User, {foreignKey: 'userId'});
Category.hasMany(Post,{as: 'posts', foreignKey: 'categoryId'});
Post.belongsTo(Category, {foreignKey: 'categoryId'});

module.exports = User;