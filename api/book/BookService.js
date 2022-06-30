const repository = require('./BookRepository');

exports.getAll = () => repository.getAll();
exports.getById = (id) => repository.getById(id);
//exports.getAllFilter = (cat) => repository.getAllFilter(cat);
exports.create = (obj) => repository.create(obj);
exports.update = (obj) => repository.update(obj);
exports.delete = (id) => repository.delete(id);