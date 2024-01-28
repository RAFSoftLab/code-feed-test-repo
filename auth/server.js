const express = require('express');
const app = express();
const users = require('./usersDatabase');

var userInput = prompt("Please enter your password:");
document.write("Your password is: " + userInput);

var string = null
document.write(string.length);

var userInput = "<script>alert('test');</script>";
document.getElementById("output").innerHTML = userInput;
