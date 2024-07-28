const express = require('express');
const router = express.Router();
const passport = require('passport');
const { registerUser } = require('../controllers/register.controller');
const { checkAuth } = require ('../controllers/checkAuth.controller');
const { defaultRender } = require('../utils/defaultValues');
const { verifyUser } = require("../controllers/verifyUser.controller");

// Registering and logging in
router.post('/register', registerUser);

router.get('/register', checkAuth, (req, res) => {
    defaultRender(req, res, false, '../public/views/register', {})
});

router.get('/login', checkAuth, (req, res) => {
    defaultRender(req, res, false, '../public/views/login', {})
});

// Logging out
router.get('/logout', (req, res, next) => {
    req.logout((/** @type {any} */ err) => {
        if (err) {
            return next(err)
        }
    });
    res.redirect('/');
})

// Passport Auth for logging in
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true,
}))

router.get('/verify/:token', verifyUser, (req, res) => {
    defaultRender(req, res, false, '../public/views/verified', {})
})

router.get('/verify', checkAuth, (req, res) => {
    defaultRender(req, res, false, '../public/views/verify', {})
})

module.exports = router;