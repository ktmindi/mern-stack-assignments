const Product = require('../models/product.model')

module.exports = {
    getAllProducts:(req,res)=>{
        Product.find()
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    },
    getOneProduct:(req,res)=>{
        Product.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    },
    addProduct:(req,res)=>{
        Product.create(req.body)
        .then((result)=>{
            res.json()
        }).catch((err)=>{
            console.log(err)
        })
    },
    updateProduct:(req,res)=>{
        Product.updateOne({_id:req.params.id}, req.body)
        .then((result)=>{
            res.json()
        }).catch((err)=>{
            console.log(err)
        }) //we will make these more complex over time.. but more often then most this is adequate
        // we also have to add what we are updating the movie with to this function
    },
    deleteProduct:(req,res)=>{
        Product.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json()
        }).catch((err)=>{
            console.log(err)
        })
    },
}