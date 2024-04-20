const mongoose = require('mongoose');
const contentArea = new mongoose.Schema({
    link:{
        type:String
    },
    title:{
        type:String
    },
    about:{
        type:String
    }
});
const content = mongoose.model('contentDetail',contentArea);
module.exports=content;