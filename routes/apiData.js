const mongoose = require('mongoose');
const loginRequire = require('../middlewares/requireLogin');
const Users = mongoose.model('users');

module.exports = (app) => {
    app.get('/api/users',loginRequire, async (req, res)=> {
        const users = await Users.find();
        res.send(users);
    });
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};