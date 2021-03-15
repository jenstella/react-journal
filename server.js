require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const { ObjectId } = require("mongodb");

const staticDir = path.resolve("./client/public");

//----------Mongoose----------//

const mongoose = require("mongoose");

//always needs a url, and / connects it to that db
//this connects to our database
mongoose.connect("mongodb://localhost:27017/til", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//connects it to the til database
const tilDB = mongoose.connection;

//if we don't set up an error output, mongoose may just exit if there is an error
const db = tilDB;
db.on("error", console.error.bind(console, "connection error"));

//creating a schema. Schema is a class, so the S is capitalized
//adding in data-types
//this is the entrySchema Model -- this is what writes to specific collection /enforces shape
const entrySchema = new mongoose.Schema({
  date: Date,
  title: String,
  author: String,
  entry: String,
  tags: Array,
});

//the first argument for model is what you want to connect to, the second is the schema you have set up
//EntriesModel is the reference to the model.
const EntriesModel = mongoose.model("entries", entrySchema);
app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: true }));

//adding a new entry
app.post("/add", async (req, res) => {
  let newEntry = new EntriesModel({
    title: req.body.title,
    author: req.body.author,
    date: Date.now(),
    entry: req.body.entry,
    tags: [req.body.tags],
  });
  await newEntry.save();
  res.redirect("/");
});

//function to update an entry, gets called below
async function updateEntry(id, update) {
  let updateObj = {
    $set: update,
  };
  await EntriesModel.updateOne({ _id: ObjectId(id) }, updateObj);
}

//updating an entry
//call updateEntry function
app.post(
  "/Edit/:_id",
  express.urlencoded({ extended: true }),
  async (req, res) => {
    let id = req.params._id;
    let data = req.body;
    console.log(data);
    await updateEntry(id, data);
    res.redirect("/");
  }
);

app.get("/api", async (req, res) => {
  //get everything
  const cursor = await EntriesModel.find({});
  //create an array to hold it
  let results = [];
  //iterate over cursor obj
  await cursor.forEach((entry) => {
    results.push(entry);
  });
  console.log(results);

  res.json(results);
});

// adding a new entry
// comment out when printing all
const NewEntry1 = new EntriesModel({
  title: "This is the title",
  author: "Author's Name",
  date: Date(),
  entry: "this is my test example",
  tags: ["testing"],
});

// give it an error callback first, then object itself
// call save method to put the data into the database
NewEntry1.save((err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("successfully added: ", data);
  }
});

//pulls in one specific post to edit
app.get("/api/:id", async (req, res) => {
  let id = req.params.id;
  console.log(id);
  let data = await EntriesModel.findOne({ _id: id });
  console.log(data);

  res.json(data);
});

//to delete an entry
app.get("/delete/:id", async (req, res) => {
  let id = req.params.id;

  await EntriesModel.findOneAndDelete({ _id: id });
});

//port
app.listen(port, () => {
  console.log("Listening on port:", port);
});
