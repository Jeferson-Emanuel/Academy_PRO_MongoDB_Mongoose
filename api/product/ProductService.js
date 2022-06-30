const repository = require('./ProductRepository');

exports.getAll = () => repository.getAll();
exports.getById = (id) => repository.getById(id);
exports.create = (obj) => repository.create(obj);
exports.update = (obj) => repository.update(obj);
exports.delete = (id) => repository.delete(id);