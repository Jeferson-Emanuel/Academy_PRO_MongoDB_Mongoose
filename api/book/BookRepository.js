const model = require('./BookModel');
/* const bd = require('../../database/connection');

bd.connection; */

exports.getAll = () => model.find();
exports.getById = (id) => model.findById(id);
//exports.getAllFilter = (cat) = model.find({categories: /.*cat.*/});
exports.create = (obj) => model.create(obj);
exports.update = (obj) => model.updateOne({_id: obj._id}, obj, (err) => {
        if(err) throw err;
});
exports.delete = (id) => model.deleteOne({_id: id}, (err) => {
    if(err) throw err;
});