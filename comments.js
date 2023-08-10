//Create web server
var express = require('express');
var router = express.Router();
// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called comment
mongoose.connect('mongodb://localhost/comment');
// Create a schema
var CommentSchema = new mongoose.Schema({
  comment: String,

