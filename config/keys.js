
// keys.js - figure out waht set of keys to return
if (process.env.NODE_ENV == 'production') {
    // we are in production
    module.exports = require('./prod');
} else {
    // we are in development mode return dev keys
    module.exports = require('./dev');
}