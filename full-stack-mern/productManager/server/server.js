const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;


require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
    cors({
        origin: 'http://localhost:3000',
        }),
    );

require('./routes/product.routes')(app)
    
app.listen(PORT,()=>{
    console.log(`Server is up on port ${PORT}`)
})