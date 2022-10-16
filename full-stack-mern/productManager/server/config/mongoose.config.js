const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/productdb', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to Product DB")
}).catch((err)=>{
    console.log(err)
})