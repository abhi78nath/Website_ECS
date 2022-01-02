const express=require("express");
const ejs=require("ejs");
const app=express();
const compression=require("compression");

app.set('view engine','ejs');

app.use(express.static("public"));

app.use(compression({
    level: 6,
    threshold: 0,
    filter:(req,res)=>{
        if(req.headers['x-no-compression']){
            return false;
        }
        return compression.filter(req,res);
    },
}));

app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/Resources",function(req,res){
    res.render("Resources.ejs");
});

app.get("/Members",function(req,res){
    res.render("Members.ejs");
});

app.get("/Developers",function(req,res){
    res.render("Developers.ejs");
});

app.get("/gallery",function(req,res){
    res.render("gallery.ejs");
});

app.get("/1stsem",function(req,res){
    res.render("1stsem.ejs");
});

app.get("/2ndsem",function(req,res){
    res.render("2ndsem.ejs");
});

app.get("/3rdsem",function(req,res){
    res.render("3rdsem.ejs");
});

app.get("/4thsem",function(req,res){
    res.render("4thsem.ejs");
});

app.get("/5thsem",function(req,res){
    res.render("5thsem.ejs");
});

app.get("/6thsem",function(req,res){
    res.render("6thsem.ejs");
});

app.get("/7thsem",function(req,res){
    res.render("7thsem.ejs");
});

app.get("/8thsem",function(req,res){
    res.render("8thsem.ejs");
});




app.listen(process.env.PORT || 3000,function(){
    console.log("server is running");
});