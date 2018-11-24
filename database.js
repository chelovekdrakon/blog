const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => new Promise((res, rej) => {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);
     
    mongoose.connection
        .on('error', error => rej(error))
        .on('close', () => { console.log('DB connection closed.'); })
        .once('open', () => res(mongoose.connections[0]));

    mongoose.connect(config.MONGO_URL, { useNewUrlParser: true });
});