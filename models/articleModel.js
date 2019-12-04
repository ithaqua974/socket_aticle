let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let dbUrl = 'mongodb://localhost:27017/article';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
let articleSchema = mongoose.Schema({
    titre: String,
    texte: String,
    photo: String,
});

let Article = mongoose.model('Article', articleSchema);
module.exports = Article;