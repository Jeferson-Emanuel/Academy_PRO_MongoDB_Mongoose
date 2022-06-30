const connection = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/exemplo';

connection.connect(url, (err) => {
    if(err) throw err;
    console.log('DB Connected...');
});

module.exports = connection;