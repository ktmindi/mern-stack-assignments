const AuthorController = require('../controllers/author.controllers')

module.exports = (app) => {
    //GET ALL 
    app.get('/api/author',AuthorController.getAllAuthors)
    //GET ONE 
    app.get('/api/author/:id',AuthorController.getOneAuthor)
    //CREATE NEW 
    app.post('/api/author', AuthorController.addAuthor)
    //UPDATE 
    app.put('/api/author/:id', AuthorController.updateAuthor)
    //DELETE
    app.delete('/api/author/:id',AuthorController.deleteAuthor)
}