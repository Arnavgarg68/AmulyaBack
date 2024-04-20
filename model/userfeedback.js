const mongoose = require('mongoose');
const sc = new mongoose.Schema({
    username:{
        type:String
    },
    title:{
        type:String
    },
    about:{
        type:String
    },
    rating:{
        type:Number
    }
})
const feedback = mongoose.model('feedback',sc);
module.exports=feedback;