// ./routes/index.js

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log(req.oidc.isAuthenticated());
    res.render('index', { title: 'Login Page',
    isAuthenticated:req.oidc.isAuthenticated(),
user:req.oidc.user, });
});

module.exports = router;
