const express = require("express");
const app = express();
const ejs = require('ejs');
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

require('events').EventEmitter.defaultMaxListeners = 15;

const userRoutes = require('./api/routes/user');
//  mongodb+srv://furnitureCart:Pandey@cluster0.a8ftfur.mongodb.net/
//  mongodb+srv://rawzone:rawzone@cluster0.ejnzela.mongodb.net/
mongoose.connect("mongodb+srv://rawzone:rawzone@cluster0.ejnzela.mongodb.net/",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  }
).then((res) => {
  console.log(`connnection successful.......`);
}).catch((err) => console.log(`no connection`, err));


mongoose.Promise = global.Promise;

app.set("view engine", ejs)
app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(bodyParser.json());

// Routes which should handle requests
app.use("/user", userRoutes);


app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;