const model = require('./ProductModel');
/* const bd = require('../../database/connection');

bd.connection; */

exports.getAll = () => model.find();
exports.getById = (id) => model.findById(id);
exports.create = (obj) => model.create(obj);
exports.update = (obj) => model.updateOne({_id: obj._id}, obj, (err) => {
    if(err) throw err;
});
exports.delete = (id) => model.deleteOne({_id: id}, (err) => {
    if(err) throw err;
});