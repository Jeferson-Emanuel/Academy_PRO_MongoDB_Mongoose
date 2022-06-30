const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* const SpecSchema = new Schema({
    ram: Number,
    screen: Number,
    cpu: Number
}) */

ProductSchema = new Schema({
    _id: Number,
    name: String,
    price: Number,
    releaseDate: Date,
    spec: { 
        ram: Number,
        screen: Number,
        cpu: Number
    },
    color: [String],
    storage: [Number]
}, {versionKey: false});

module.exports = mongoose.model('products', ProductSchema);