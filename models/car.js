const mongoose = require('mongoose');
const Joi = require('joi');

const carSchema = new mongoose.Schema({
    licencePlateNumber: {
        type: String,
        minlength: 5,
        maxlength: 10,
        required: true
    },
    ownersName: {
        type: String,
        minlength: 5,
        maxlength: 40,
        required: true
    },
    power: {
        type: Number,
        required: true
    }

});

const Car = mongoose.model('Car', carSchema);

const validateBook = (car) => {
    const schema = {
        licencePlateNumber: Joi.string().min(5).max(10).required(),
        ownersName: Joi.string().min(5).max(40).required(),
        power: Joi.number().required(),
    }

    return Joi.validate(car, schema);
}

exports.Car = Car;
exports.validate = validateBook;
