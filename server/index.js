const express = require("express");
const cors = require("cors");
const PORT = 4000
const app = express();
const encCtrl = require('./controller')


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.



app.get('/api/encouragement', encCtrl.getEnc)
app.get('/api/encouragement', encCtrl.deleteEnc)
app.get('/api/encouragement', encCtrl.createEnc)






app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortunes", (req, res) => {
  const fortunes = ["A fresh start will put you on your way",
  "A smile is your personal welcome mat",
"Bide your time, for success is near",
"Courtesy begins in the home.",
"Do not let ambitions overshadow small success."];

let randomizer = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomizer];

res.status(200).send(randomFortune)
});

app.get("/api/suggestions", (req,res) => {
let sugs = ["Coffee in small doses","Fuel your body","Get enough sleep",
"Go for a walk/Take a break","Give a meditation a try","Train your brain"]
res.status(200).send(sugs)
})

app.put("/api/encouragement", (req,res) =>{

  
  res.send("Thanks for Adding!")
})

app.post("/api/textarea", (req,res)=>{
  res.send("Wow thats amazing, make sure you keep it up")
})

app.listen(4000, () => console.log("Server running on 4000"));
