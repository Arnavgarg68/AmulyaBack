const express = require('express');
const mongoose = require("mongoose");
const router = require('./router/router')
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express());
app.use(express.json());
mongoose.connect("mongodb+srv://arnaviitjee:rockrock@cluster0.kq5auf9.mongodb.net/").then(()=>{
    app.listen(8000,()=>{
        console.log("server running at port 8000");
    })
}).catch((error)=>{
    console.log(error);

})

app.use(router);