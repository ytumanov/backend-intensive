// Core
import express from 'express';
import passport from 'passport';


const route = express.Router();

route.get('/', passport.authenticate('github', { scope: [ 'user:email' ] }),
    function(req, res) {
    });

route.post('/', passport.authenticate('github', { scope: [ 'user:email' ] }),
    function(req, res) {
    });

route.get('/callback', passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/api/teachers');
    });

route.post('/callback', passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/api/teachers');
    });


export { route as github };
