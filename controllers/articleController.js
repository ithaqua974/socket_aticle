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

};
controller.add = (req, res) => {
    // if (err) throw err;
    res.render("ajout");
};
controller.save = (req, res) => {
    // console.log(req.file);
    //verif

    //upload

    //save
    try {
        mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {

            photo = req.files.photo;
            fileUpload(photo);

            let personneAjout = new Personne({
                nom: req.body.nom,
                prenom: req.body.prenom,
                photo: photo.name,
                dob: req.body.dob,
                ville: req.body.ville,
                genre: req.body.genre,
                domaine: req.body.domaine,
            });

            personneAjout.save((err) => {
                if (err) throw err;
                res.redirect('/');
            });



        });
    } catch (err) {
        if (err) {
            console.log(err)
        }
    }
    // rendu de la vue avec la variable résultat

};



module.exports = controller;