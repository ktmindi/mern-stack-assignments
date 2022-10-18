const Author = require('../models/author.model')
//this const MOVIE is referring to the collection in the database

module.exports = {
    getAllAuthors:(req,res)=>{
        Author.find()
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    getOneAuthor:(req,res)=>{
        Author.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    addAuthor:(req,res)=>{
        Author.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    updateAuthor:(req,res)=>{
        Author.updateOne({_id:req.params.id}, req.body, {runValidators:true})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        }) //we will make these more complex over time.. but more often then most this is adequate
        // we also have to add what we are updating the movie with to this function
    },
    deleteAuthor:(req,res)=>{
        Author.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    }
}