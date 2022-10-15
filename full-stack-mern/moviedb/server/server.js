const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

// require configuration file 
require('./config/mongoose.config')
//a single dot slash is saying start here and go into config folder - we do this because config and server are both on the same 'level' or folder level 

//Middleware for formatting and allowing POST requests
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
    cors({
        origin: 'http://localhost:3000',
        }),
    );
//also require our routes -- look at how i did it in yesterdays lecture lecture 9/28

//const Routes = require('./routes/movie.routes')
//Routes(app)
// ^^ these two lines and vv the one line below are both equivelent when wanting to import our routes
require('./routes/movie.routes')(app)


app.listen(PORT,()=>{
    console.log(`Server is up on port ${PORT}`)
})