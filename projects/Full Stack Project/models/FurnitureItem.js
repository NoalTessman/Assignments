const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Create Scheme
const ItemSchema = new Schema({
name: {
    type: String,
    required: true
},
year: {
    type: Number,
    required: true
},
room: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true
},
type: {
    type: String,
    required: true
},
url:{
    type: String,
    required: true
},
date:{
    type: Date,
    default: Date.now
},
})
module.exports = Item = mongoose.model('item', ItemSchema)