const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudDB', (err) => {
    if (!err)
        console.log('Connection Successful.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;