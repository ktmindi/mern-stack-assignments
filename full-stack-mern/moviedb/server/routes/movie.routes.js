const MovieController = require('../controllers/movie.controllers')

module.exports = (app) => {
    //GET ALL MOVIES
    app.get('/api/allMovies',MovieController.getAllMovies)
    //GET ONE MOVIE
    app.get('/api/movie/:id',MovieController.getOneMovie)
    //CREATE NEW MOVIE -- we know that on the front end we will most likely be using a form to input data into our DB so keeping that in mind how do we write the route?
    app.post('/api/addMovie', MovieController.addMovie)
    //UPDATE MOVIE
    app.put('/api/update/:id', MovieController.updateMovie)
    //DELETE MOVIE
    app.delete('/api/delete/:id',MovieController.deleteMovie)
}