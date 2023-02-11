const express=require("Express");
const https= require("https");
const path=require("path");
const bodyparser= require("body-parser");
const { response } = require("Express");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
const mongoose = require("mongoose");
const { time } = require("console");
mongoose.set('strictQuery', false);

const mongoDB = "mongodb://127.0.0.1/TRYMNNIT";
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
const Schema = mongoose.Schema;

const LoginSchema = new Schema
({
  emailid : String,
  username :String,
  password :String
});
const Tasksf =mongoose.model("LoginIDFarmer",LoginSchema);
const Taskse =mongoose.model("LoginIDEnthu",LoginSchema);
// USe Tasksf for handling farmers database
// USe TAskse for handling enthusiasts database
const t1=new Tasksf({
  emailid : "arpit@gmail.com",
  username :"arpitras",
  password : "naman"
});
const t2= new Taskse(
{
emailid : "arsh@gmail.com",
username :"arshweb",
password : "naman"
});

// t1.save();
// t2.save();
app.post("/fsignin.html",function(req,res)
{
  // const res2=req.body.s1;
   const v1= req.body.fsinid;
   const v2=req.body.fsinpasswd;
   Tasksf.find({username :v1, password: v2},function(err,docs)
   {
       if(err)
        res.send("err");
       else
       {
        var x= console.log(Object.keys(docs).length);
        x=Object.keys(docs).length;
         if(x==0)
          res.send("Login Failed");
         else
          res.send("Welcome");
       }
   });
   //console.log("data added successfully");
  // res.send("Added to DB successfully");
});

app.post("/fsignup",function(req,res)
{
   const v1= req.body.fsupid;
   const v2= req.body.fsupemail;
   const v3=req.body.fsuppasswd;
   const t1=new Tasksf({
    emailid : v2,
    username :v1,
    password : v3
  });
   t1.save();
   res.send("ID created succesfully");

});

app.post("/esignin.html",function(req,res)
{
  // const res2=req.body.s1;
   const v1= req.body.fsinid;
   const v2=req.body.fsinpasswd;
   Taskse.find({username :v1, password: v2},function(err,docs)
   {
       if(err)
        res.send("err");
       else
       {
        var x= console.log(Object.keys(docs).length);
        x=Object.keys(docs).length;
         if(x==0)
          res.send("Login Failed");
         else
          res.send("Welcome");
       }
   });
   //console.log("data added successfully");
  // res.send("Added to DB successfully");
});
app.post("/esignup",function(req,res)
{
   const v1= req.body.fsupid;
   const v2= req.body.fsupemail;
   const v3=req.body.fsuppasswd;
   const t1=new Taskse({
    emailid : v2,
    username :v1,
    password : v3
  });
   t1.save();
   res.send("ID created succesfully");

});



const str=__dirname;
const str2=path.join(__dirname,"../");
//console.log(str2);
app.use(express.static(str2)); 
console.log(str2);
app.get("/",function(req,res)
{
    const str=__dirname;
    const str2= path.join(__dirname,"../");
    res.sendFile(str2 + "/views/frontpage.html");
   console.log(str2+ "/views/frontpage.html");
   console.log("Running I guess");
});
app.get("/details",function(req,res)
{
  //res.send("Working rn");
    Tasks.find(function(err,workings)
    {
         if(err)
          console.log(err);
        else
        res.send(workings);
    });
});

app.listen(3000,function()
{
    console.log("Server is running on port 3000");
});
