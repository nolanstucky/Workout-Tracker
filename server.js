const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = require('./models');

app.use(express.static('public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const frontEndRoutes = require("./controllers/apiController");
app.use(frontEndRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
