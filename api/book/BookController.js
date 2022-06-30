const express = require('express');
const router = express.Router();
const service = require('./BookService');

router.get('/', (req, res) => {
    service.getAll().then((books) => {
        res.send(books);
    });
});

router.get('/:id', (req, res) => {
    service.getById(req.params.id).then((book) => {
        res.send(book);
    });
});

/* router.get('/categorie=:cat'), (req, res) => {
    console.log(req.params.cat);
    service.getAllFilter(req.params.cat).then((books) => {
        res.send(books);
    });
}; */

router.post('/', (req, res) => {
    service.create(req.body);
    res.send('New book document created.');
});

router.put('/', (req, res) => {
    service.update(req.body);
    res.send('Book document successfully updated.');
});

router.delete('/:id', (req, res) => {
    service.delete(req.params.id);
    res.send('Book document successfully deleted.');
});

module.exports = router;