const router = require("express").Router();

const article = require('../controllers/articleController.js');

router.get('/', article.list);
router.get('/ajout', article.add);
router.post('/add', article.save);
// router.get('/delete/:id', article.delete);
// router.get('/edit/:id', article.edit);
// router.post('/update', article.update);

module.exports = router;