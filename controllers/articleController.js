var mongoose = require('mongoose');
var Article = require('../models/articleModel.js');
// var moment = require('moment');

var dbUrl = 'mongodb://localhost:27017/article';
const db = mongoose.connection;

const controller = {};

controller.list = (req, res) => {
    Article.find(function (err, articles) {

        if (err) throw err;
        res.render("index", {
            articles: articles
        });
    });
};

fileUpload = (photo) => {
    photo.mv('${__dirname}/../public/uploads/' + photo.name), (err) => {
        if (err)
            return res.statut(500).send(err);
    };

}



module.exports = controller;