const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");


const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },Slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// hasMany - uma Categoria tem muitos artigos 1:N
Category.hasMany(Article);
// belongsTo - irá fazer um relacionamento 1:1 entre um Artigo e uma categoria
Article.belongsTo(Category);
// sync ira sincronizar o model Article no DB, foce:true ira recriar a tabela
//Article.sync({force:true});
module.exports = Article;