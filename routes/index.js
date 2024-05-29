var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        title: 'Login Page',
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user
    });
});

router.get('/signin', function(req, res) {
    res.render('signin', {
        title: 'Sign In',
        isAuthenticated: req.oidc.isAuthenticated()
    });
});

// Route to trigger Auth0 sign-in with Google
router.get('/login/google', (req, res) => {
    res.oidc.login({
        authorizationParams: {
            connection: 'google-oauth2'
        }
    });
});

// Route to trigger Auth0 sign-in with Apple
router.get('/login/apple', (req, res) => {
    res.oidc.login({
        authorizationParams: {
            connection: 'apple'
        }
    });
});

// Auth0 callback handler
router.get('/callback', (req, res) => {
    res.redirect('/');
});

module.exports = router;
