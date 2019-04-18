const express = require("express");
 const user_info=express.Router();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var Book=require('./Book_Model');
 
var port = 8080;
var db = 'mongodb://localhost/example';
mongoose.connect(db);
// user_info.get("/info",(req,res)=>{
//     mongoose.connect(db);
    
// })

user_info.get('/user_info', function(req, res){
    console.log('getting all books');
    Book.find({}).exec(function(err, books){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(books);
            res.json(books);
        }
    });
});

user_info.get("/user_info_by_id/:id",function(req,res){
    console.log("working")
    console.log(req.params.id)
    Book.findOne({
        _id:req.params.id
    }).exec(function(err,book){
        if(err){
            console.log(err)
            res.send("error occoud");
        }
        else{
            console.log(book)
            res.send(book);
        }
    })
})



user_info.post("/add_user",function(req,res){
    var newUser=new Book();
    newUser.title=req.body.title;
    newUser.author=req.body.author;
    newUser.category=req.body.category;

    newUser.save(function(err,book){
        if(err){
    res.send("error saving book")
        }
        else{
      res.send(book);
        }
    })
})



 


module.exports=user_info