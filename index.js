const express = require("express");
const res = require("express/lib/response");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.set("view engine", "ejs");

app.listen(3000, function () {
  console.log("listen on 3000");
});

MongoClient.connect(
  "mongodb+srv://Michal:Tymbark2005@cluster0.dxzoz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (err, client) => {
    if (err) return console.error(err);
    console.log("Connected to Database");

    const db = client.db("myWebsite");

    app.get("/", (req, res) => {
      const cursor = db
        .collection("myWebsite")
        .find()
        .toArray()
        .then((results) => {
          console.log(results[0]);
        });
      res.render("index.ejs", {});
      console.log("siema");
    });

    app.get("/data/", (req, res) => {
      const cursor = db
        .collection("myWebsite")
        .find()
        .toArray()
        .then((results) => {
          console.log(results[0]);
          res.send(results[0]);
        });
    });
  }
);
