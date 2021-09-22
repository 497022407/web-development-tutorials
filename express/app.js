const exp = require("constants");
const express = require("express");
const app = express()
const sublevel1 = require("./sublevel1")
const MongoClient = require('mongodb').MongoClient;
const mongo = require('./mongo');
mongo.connect(MongoClient)

const mid = (req, res, next) => {
    console.log("in midware");
    next();
}

app.use(mid);
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.send("testing exprss");
});

app.use('/sublevel', sublevel1);

// app.listen(3000, () => {
//     console.log("listening");
// })