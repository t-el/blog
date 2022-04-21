var express = require('express');
var router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');
let uri = "mongodb+srv://taha:rLN6cFqGbXT3k3n4@cluster0.zbety.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect().then().catch();
const db = client.db("myblog");
const articles = db.collection('articles');

/* GET home page. */
router.get('/',async function(req, res, next) {
  let all_article = await articles.find({}).toArray();
  res.render('index', { title: 'Taha Elkarroumy',articles : all_article });
});

router.get('/article/:id',async function(req, res, next) {
  let article = await articles.find({_id:ObjectId(req.params.id)}).toArray();

  res.render('article', { title: article[0].title,article : article });
});

router.get('/add', function(req, res, next) {
  res.render('writes_space.ejs', { title: 'Taha Elkarroumy' });
});

router.post('/add', async function(req, res, next) {
 const content = req.body.content;
 const title = req.body.title;
 const date = new Date().toDateString();
 let article = await  articles.insertOne({
   content,
   title,
   date
 });

  res.json(article);
});

module.exports = router;
