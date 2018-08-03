const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/FurnitureItem');

// @route Get api/items
// @description Get all items
// @access Get Public
router.get('/', (req,res)=>{
    Item.find() 
    .sort({ date: -1})
    .then(items => res.json(items))
});
// @route Post to api/items
// @description Post one piece of furniture to the furniture api
// @access Get Public
router.post('/', (req,res)=>{
    const newItem = new Item({
        name: req.body.name,
        year: req.body.year,
        room: req.body.room,
        type: req.body.type,
        url: req.body.url,
        price: req.body.price
        });

    newItem.save().then(item => res.json(item));
});
//@route delete an item from /api/items
//@description Delete one item from the api
//@access Get public
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(item=>item.remove().then(()=> res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
})
module.exports = router;