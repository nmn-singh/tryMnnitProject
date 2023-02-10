const path=require('path');
const express=require("Express");
const https= require("https");
const bodyparser= require("body-parser");
const { response } = require("Express");
const appexpress=express();

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDx6ZPzq1YzPuVmJO8HbMy8Mq0x8B_gNSE",

  authDomain: "trymnnit.firebaseapp.com",

  projectId: "trymnnit",

  storageBucket: "trymnnit.appspot.com",

  messagingSenderId: "970884163038",

  appId: "1:970884163038:web:5ac0ab72e0e9bcaf2ca94f",

  measurementId: "G-2D08MFMFSX"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

appexpress.get("/",function(req,res)
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
appexpress.listen(3000,function()
{
    console.log("Server is running on port 3000");
});
    