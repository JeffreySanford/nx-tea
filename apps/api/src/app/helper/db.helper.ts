// Importing mongoose module
const mongoose = require("mongoose")
  
// Database Address
const url = "mongodb://localhost:27017/tea"
  
// Connecting to database
mongoose.connect(url).then((ans) => {
    console.log("ConnectedSuccessful")
}).catch((err) => {
    console.log("Error in the Connection")
})
  
  
// Calling Schema class
const Schema = mongoose.Schema;
  
// Creating Structure of the collection
const collection_structure = new Schema({
    name: {
        type: String,
        require: true
    },
    marks: {
        type: Number,
        default: 0
    }
})
  
// Creating collection
const collections = mongoose.model(
        "GFG2", collection_structure)
  
// Inserting one document
collections.create({
    name: "aayush"
}).then((ans) => {
    console.log("Document inserted")
     
    // Inserting invalid document
    collections.create({
        name: "saini",
        marks: "#234",
        phone: 981
    }).then((ans) => {
        console.log(ans)
    }).catch((err) => {
          
        // Printing the documents
        collections.find().then((ans) => {
                console.log(ans)
            })
          
        // Printing the Error Message
        console.log(err.message)
    })
}).catch((err) => {
  
    // Printing Error Message
    console.log(err.message)
})