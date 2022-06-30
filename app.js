const express = require('express');
const bodyParser = require('body-parser');
const bd = require('./database/connection');

bd.connection;

const books = require('./api/book/BookController');
const products = require('./api/product/ProductController');

const app = express();
const port = 4456;

app.use(bodyParser.json());
app.use('/books', books);
app.use('/products', products);

app.get('/', (req, res) => {
    res.send('Starting page...');
}).listen(port, () => {
    console.log(`App listening on port: ${port}`);
});