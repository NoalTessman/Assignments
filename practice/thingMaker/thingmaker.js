const express = require('express');
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8081;

Things = require('./things');

const app = express();
app.use(bodyParser.json());

app.route('/things')
.get((req,res)=>{
    res.send(things.Things.filter(Eggs => req.query.Religion ? Eggs.Religion === req.query.Religion : true))

})
app.listen(PORT, ()=> console.log(`Hello al, there is a server running here => ${PORT}`))