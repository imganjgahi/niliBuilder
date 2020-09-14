const Sequelize = require('sequelize');
const sequelize = require('../../db/mysqlDatabase');
const Post = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lead: {
        type: Sequelize.STRING,
        defaultValue: "بدون توضیحات"
    },
    content: {
        type: Sequelize.TEXT,
        defaultValue: "بدون متن"
    },
    img: {
        type: Sequelize.STRING,
        defaultValue: "http://localhost:5000/public/uploads/avatar.jpg"
    },
    status: {
        type: Sequelize.TINYINT,
        defaultValue: 1
    },
    label: {
        type: Sequelize.STRING,
        allowNull: true
    }

})
module.exports = Post;