const express = require("express");
const res = require("express/lib/response");
const app = express();
const bodyParser = require("body-parser");
const myWebsite = require("./myWebsite");
const MongoClient = require("mongodb").MongoClient;

app.set("view engine", "ejs");
let jsonParser = bodyParser.json();

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
        .then((results) => {});
      res.render("index.ejs", {});
    });

    app.get("/data/", (req, res) => {
      const cursor = db
        .collection("myWebsite")
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
          res.send(results);
        });
    });

    app.post("/wyslij", jsonParser, (req, res) => {
      const text = req.body.userMessages2.text;
      const img = req.body.userMessages2.image;

      const data = { text: text, img: img };

      const fn = async () => {
        try {
          db.collection("myWebsite").insertOne(data);
        } catch (error) {
          console.log("Error", error);
        }
      };
      fn();
      res.send("msg");
    });
  }
);
