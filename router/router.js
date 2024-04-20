const express = require('express');
const router = express.Router();
const content = require('../model/userschema');
const feed = require('../model/userfeedback');

// ok tested
router.get("/contentarea",async(req,res)=>{
    try{
        const allfields = await content.find();
        console.log(allfields);
        res.status(200).json(allfields);
    }
    catch(error){
        console.log("error in get all fields "+error)
    }
});
router.get('/feedback',async(req,res)=>{
    try{
        const feedbacks = await feed.find();
        res.status(200).json(feedbacks);
    }
    catch(error){
        res.status(400).send("error ho gya");
        console.log(error);
    }
})
// ok tested
router.post("/contentarea",async(req,res)=>{
    const {link,title,about} = req.body;
    try{
        const field = await content.create({
            link:link,
            title:title,
            about:about
        });
        res.status(200).json(field)
    }
    catch(error){
        console.log("error in content post "+error);
    }
});
// ok tested
router.post("/feedback",async(req,res)=>{
    console.log(req.body)
    const {title,username,rating,about} = req.body;
    // console.log(bod);
    try{
        const newfeedback = await feed.create({
            title:title,
            username:username,
            rating:rating,
            about:about
        });
        res.status(200).json(newfeedback);
    }
    catch(error){
        console.log("error in creation"+error);
    }
})
// ok tested
router.delete("/contentarea/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const field = await content.findByIdAndDelete(id);
        console.log(field);
        res.status(200).json(field);
    }
    catch(error){
        console.log("error in delete of field "+error);
    }
})
module.exports=router;