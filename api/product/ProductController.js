const express = require('express');
const router = express.Router();
const service = require('./ProductService');

router.get('/', (req, res) => {
    service.getAll().then((products) => {
        res.send(products);
    });
});

router.get('/:id', (req, res) => {
    service.getById(req.params.id).then((product) => {
        res.send(product);
    });
});

router.post('/', (req, res) => {
    service.create(req.body);
    res.send('New product document created.');
});

router.put('/', (req, res) => {
    service.update(req.body);
    res.send('Product document successfully updated.');
});

router.delete('/:id', (req, res) => {
    service.delete(req.params.id);
    res.send('Product document successfully deleted.');
});

module.exports = router;