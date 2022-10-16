const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required!"],
        minLength:[2,"Must be at least 2 characters!"],
        maxLength:[10,"Must be less than 10 characters"]

    },
    director:{
        type:String,
        required:[true,"Director is required!"]

    },
    rating:{
        type:String,
        required:[true,"Rating is required!"],
        enum:['G','PG','PG-13','R','NC-17']
    },
    genre:{
        type:String,
        required:[true,"Genre is required!"],
        enum: [
            'Comedy',
            'Drama',
            'Horror',
            'Sci-Fi',
            'Fantasy',
            'Action',
            'Family',
            'Animated',
            'Documentary',
            'Romcom',
            'Silent Movie',
            'Thriller',
            'Crime Noir',
            'French Cinema',
            'Horror/Comedy',
            'Kung-Fu',
            'Bollywood'
        ]
    },
    releaseYear:{
        type:Number,
        required:[true,"Release Year is required!"]
    },
    duration:{
        type:String,
        required:[true,"Duration is required!"]
    },
    boxArt:{
        type:String,
        required:[true,"Image link is required!"]
    }
    
},{timestamps:true})


const Movie = mongoose.model('Movie', MovieSchema)

//movie is the name of the collection in the database


module.exports = Movie