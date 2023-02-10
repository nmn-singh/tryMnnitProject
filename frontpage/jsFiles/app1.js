const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port =  3000;

const app = express();

app.get('/',(err,res) => {
  res.send("hh")
});

app.listen(port,function()
{
 console.log("Server is running");
});