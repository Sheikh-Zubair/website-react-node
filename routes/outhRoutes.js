const passport = require('passport');
const check = require('../middlewares/check');

module.exports = (app) => {
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard');
        }

    );
    app.post('/api/login',
        check,
        passport.authenticate('local', {
            failureRedirect: '/api/login'
        }),
        (req, res) => {
            res.redirect('/api/current_user');
        });
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
}