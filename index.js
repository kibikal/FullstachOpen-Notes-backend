require("dotenv").config()
const express = require("express");
const cors = require("cors")
const Note = require("./models/note")

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.static("build"));


  const note = new Note({

  })

app.get("/", (req, res) => {
  res.send("<h1>Hello World!!</h1>");
});

app.get("/api/notes", (req, res) => {
  Note.find({}).then(notes=>{
    res.json(notes);
  })
  
});



app.get("/api/notes/:id", (req, res)=>{
Note.findById(req.params.id).then(note=>{
  res.json(note)
})
})


app.delete("/api/notes/:id", (req, res)=>{
  notes=notes.filter(n => n.id !== Number(req.params.id))
  res.status(204).end()
})


// const generateId = (arr)=>{
//   const maxId = arr.length>0 
//   ? Math.max(...arr.map(n=>n.id)) 
//   : 0;
//   return maxId + 1
// }

app.post('/api/notes', (req, res) => {
  const {body} = req;
if(body.content===undefined){
  return res.status(400).json({error: "Content is missing"})
}

  const note = new Note({
    content: body.content,
    date: new Date(),
    important: body.important || false,
  })

  note.save().then(savedNote=>{
    res.json(savedNote)
  })

 

  console.log(note);

})



const PORT = process.env.PORT;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))
