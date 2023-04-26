const mongoose = require("mongoose");

if(process.argv.length<3){
  console.log("provide password as argument in the terminal")
}

const password = process.argv[2];


const url = `mongodb+srv://nimoakk:${password}@cluster0.srg28nb.mongodb.net/?retryWrites=true&w=majority`

mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//   content: "I am revisiting this MongoDb today!",
//   important: true
// })


// note.save().then(result=>{
//   console.log("Note saved successfully!")
//   console.log(result)
//   mongoose.connection.close();
// }).catch(err=>console.log(err))

Note.find({}).then(result=>{
  console.log(result)
  mongoose.connection.close()
})
