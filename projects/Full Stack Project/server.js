const express= require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
var app = express();

app.use(bodyParser.json());

//Db Config
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Use Routes
app.use("/api/items", items)
const PORT = process.env.PORT || 5001;

app.get((req,res) =>{
    res.send("Hello world")
})

app.listen(PORT, ()=> console.log(`Server connected at ${PORT}`));
