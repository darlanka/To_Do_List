const express = require("express");
const bodyPrase = require("body-parser");

const app = express();
let items = [];
app.set('view engine', 'ejs');
app.use(bodyPrase.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",function(req,res){

    let today = new Date();
    let options = { 
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        };
    let day = today.toLocaleString("en-us",options);
   res.render('list',{ListTile:day,newListItems:items});
}); 

app.post("/",function(req,res){
    let item = req.body.newItem;
    items.push(item);
    console.log(items);
    res.redirect("/");
});

app.listen(3000,function(req,res){
    console.log("you have successfully loged in sever 3000");
});
