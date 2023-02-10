const path=require('path');
const express=require("Express");
const https= require("https");
const bodyparser= require("body-parser");
const { response } = require("Express");
const app=express();

const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const url = `mongodb+srv://arpit:arpit@db1.s8b2mzs.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
   // useCreateIndex: false,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

app.get("/",function(req,res)
{
    const str=path.join(__dirname,'../');
    const str2=str+ "/views/frontpage.html";
    res.sendFile(str2);
 //   res.send("LETS GO");
     console.log(str2);
    console.log("Running I guess");
    
});

// const port = process.env.port || 3000;
// app.get('/',(err,res) => {
//     res.send("hh")
//   })
//   app.listen(port)
//console.log(str2);
app.listen(3000,function()
{
    console.log("Server is running on port 3000");
});
    