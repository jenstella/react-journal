require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

const staticDir = path.resolve("./client/public");
//how to draw in the user/pw from the .env
const user = process.env.USER;
const password = process.env.PASSWORD;

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

app.get("/api", async (req, res) => {
  //get everything
  const cursor = await EntriesModel.find({});
  //create an array to hold it
  let results = [];
  //iterate over cursor obj to push each doc into array
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

app.get('/api/:id', async (req, res) => {
  let id = req.params.id
  console.log(id)
  let data = await EntriesModel.findOne({ _id: id})
   console.log(data)

   let results = []

   results.push(data);

   res.json(results);
})

app.get("/*", (req, res) => {
  res.send("sorry this is not found")
})

// //prints all entries in the database to terminal
//comment out when adding an entry
// async function printAll() {
//     const cursor = await EntriesModel.find({})

//     await cursor.forEach(entry => {
//         console.log(entry)
//     })
// }
// printAll()

//port
app.listen(port, () => {
  console.log("Listening on port:", port);
});
