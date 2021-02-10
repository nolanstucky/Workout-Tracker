const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require('./models');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(express.static('public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const frontEndRoutes = require("./controllers/apiController");
app.use(frontEndRoutes);

const seedRoutes = require("./seeders/seed");
app.use(seedRoutes);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
