const config = require('./config');
const app = require('./app');
const database = require('./database');

database().then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);

    app.listen(config.PORT, () => {
        console.log(`Blog app listening on port ${config.PORT}`);
    });
}).catch(err => {
    console.log('DB ERROR!');
    console.log(err);
});