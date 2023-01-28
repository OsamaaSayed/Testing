const  mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/myapp').then( _=>{
    console.log('database connect successfully');
})

module.exports = mongoose;