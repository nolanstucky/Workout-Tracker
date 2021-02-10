
const logger = require("morgan");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// const userRoutes = require("./controllers/userController");
// app.use(userRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
