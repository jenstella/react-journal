require('dotenv').config()
const express = require('express')

//how to draw in the user/pw from the .env
const user = process.env.USER
const password = process.env.PASSWORD


//----------Mongoose----------//

const mongoose = require('mongoose')

//always needs a url, and / connects it to that db
//this connects to our database
mongoose.connect('mongodb://localhost:27017/til', {useNewUrlParser: true, useUnifiedTopology: true})

//connects it to the til database
const tilDB = mongoose.connection

//if we don't set up an error output, mongoose may just exit if there is an error
const db = tilDB
db.on('error', console.error.bind(console, 'connection error'))

//creating a schema. Schema is a class, so the S is capitalized
//adding in datatypes
//this is the entrySchema Model -- this is what writes to specific collection /enforces shape
const entrySchema = new mongoose.Schema({
    date: Date,
    content: String,
    tags: Array
})

//the first argument for model is what you want to connect to, the second is the schema you have set up
//EntriesModel is the reference to the model. 
const EntriesModel = mongoose.model('entries', entrySchema)

//adding a new book
//comment out when printing all
const NewEntry1 = new EntriesModel({
    date: Date(),
    content: "this is my test example",
    tags: ['testing']
})

//give it an error callback first, then object itself
//call save method to put the data into the database
NewEntry1.save((err, data) => {
    if(err) {
        console.log(err.message)
    } else {
        console.log("successfully added: ", data)
    }
})

// //prints all books in the database to terminal
//comment out when adding a book
// async function printAll() {
//     const cursor = await BooksModel.find({})

//     await cursor.forEach(book => {
//         console.log(book)
//     })
// }
// printAll()