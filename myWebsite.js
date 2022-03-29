const mongoose = require("mongoose");

const myWebsiteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { collection: "myWebsite" }
);

const myWebsite = mongoose.model("myWebsite", myWebsiteSchema);

module.exports = myWebsite;
