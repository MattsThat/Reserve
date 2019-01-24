// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//    //"start": "node ./server.js",

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    username: String,
    password: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);