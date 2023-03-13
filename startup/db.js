
const mongoose = require('mongoose');
const winston = require('winston');
module.exports = () => {
    mongoose.connect('mongodb://localhost/Car_DataBase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    }).then(() => winston.info('Mongo DB Connected.'));
}
