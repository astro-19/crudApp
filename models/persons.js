const mongoose = require('mongoose');

var Person = mongoose.model('Persons', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = { Person };