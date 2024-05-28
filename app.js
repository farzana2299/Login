var express = require("express");
var path = require("path");
var indexRouter = require("./routes/index");
const { auth } = require('express-openid-connect');
require('dotenv').config();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER
};

var app = express();

// Set up the views directory and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Auth
app.use(auth(config));

// Use the indexRouter middleware
app.use("/", indexRouter);

app.listen(3000, () => {
    console.log("----server running on port 3000--------");
});
