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
    clientSecret: process.env.CLIENTSECRET,
    issuerBaseURL: process.env.ISSUER,
    authorizationParams: {
        response_type: 'code',
        scope: 'openid profile email',
        audience: 'https://dev-6yxitbr51jpb1cbo.us.auth0.com/api/v2/',
    }
};

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(auth(config));

app.use("/", indexRouter);

app.listen(3000, () => {
    console.log("----server running on port 3000--------");
});
