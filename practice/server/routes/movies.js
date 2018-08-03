const express = require('express');
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8080;

const MOVIES = [];
app.route('/movies')
    .get((req, res ) =>{
        console.log(req.query);
        res.send(MOVIES.filter(movie => {
            for(key in req.query){
                if(String(movie[key] !== req.query[key])){
                    return false}
            }
            return true;
        }));
    })
    .post((req, res) => {
        let newMovie = req.body;
        newMovie._id = uuid();
        MOVIES.push(newMovie);
        res.send(newMovie);
    })

app.route("/movies/:id/")
    .get((req, res)=>{
        let foundMovie = MOVIES.find((movie) => movie._id === req.params.id)
        res.send(foundMovie)
    })
    .put((req, res)=>{
        const toBeEdited = MOVIES.find(movie => movie._id === req.params.id);
        for(let key in req.body){
            toBeEdited[key] = req.body[key];
        }
    })
    .delete((req, res)=>{
        let delMovie = req.body;
        let foundMovie = MOVIES.find((movie) => movie.title)
    });
