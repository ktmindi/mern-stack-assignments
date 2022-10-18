const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/authordb', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to Author Database")
}).catch((err)=>{
    console.log(err)
})