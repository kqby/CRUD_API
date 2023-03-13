const { model } = require('mongoose');
const {Car, validate} = require('../models/car');


const addCar = async (req, res, next) => {
        const {error} =  validate(req.body);
        if(error) return res.status(422).send(error.details[0].message);

        let car = new Car({
            licencePlateNumber: req.body.licencePlateNumber,
            ownersName: req.body.ownersName,
            power: req.body.power,
        });

        car =  await car.save();
        res.send(car);
}

const getCars = async (req, res, next) => {
    const cars = await Car.find().sort('title').exec();
    res.send(cars);
}


const updateCar = async (req, res, next) => {
    const {error} = validate(req.body);
    if(error) return res.status(422).send(error.details[0].message);

    let car = await Car.findByIdAndUpdate(req.params.id, {
        licencePlateNumber: req.body.licencePlateNumber,
        ownersName: req.body.ownersName,
        power: req.body.power,
    }, {new: true});

    if(!car) return res.status(401).send('The Car with the given id not found');
    res.send(car);
}

const deleteCar = async (req, res, next) => {
    const car = await Car.findByIdAndDelete(req.params.id);
    if(!car) return res.status(401).send('The Car with the given id not found');

    res.send('The Car is deleted')
}


module.exports = {
    addCar,
    getCars,
    updateCar,
    deleteCar
}
