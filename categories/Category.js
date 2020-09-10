const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },Slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
// sync ira sincronizar o model Article no DB, foce:true ira recriar a tabela
//Category.sync({force:true});
module.exports = Category;