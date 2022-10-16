const Movie = require('../models/movie.model')
//this const MOVIE is referring to the collection in the database

module.exports = {
    getAllMovies:(req,res)=>{
        Movie.find()
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    getOneMovie:(req,res)=>{
        Movie.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    addMovie:(req,res)=>{
        Movie.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    updateMovie:(req,res)=>{
        Movie.updateOne({_id:req.params.id}, req.body, {runValidators:true})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        }) //we will make these more complex over time.. but more often then most this is adequate
        // we also have to add what we are updating the movie with to this function
    },
    deleteMovie:(req,res)=>{
        Movie.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    }
}