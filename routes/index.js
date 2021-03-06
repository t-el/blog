var express = require('express');
var router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');
let uri = "mongodb+srv://taha:rLN6cFqGbXT3k3n4@cluster0.zbety.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect().then().catch();
const db = client.db("myblog");
const articles = db.collection('articles');


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
