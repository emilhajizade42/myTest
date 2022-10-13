var express = require('Express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const things = require('./thing');
const app = express();
const upload = multer();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://emil:1e2m3i4l@blogdb.6tszbfo.mongodb.net/?retryWrites=true&w=majority');

const personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });
const Person = mongoose.model("Person", personSchema);

app.use(cors())
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
// app.use(express.static(__dirname + 'public'));
app.use("/public",express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json()); 
//both index.js and things.js should be in same directory
app.use('/', things);

app.listen(3000);