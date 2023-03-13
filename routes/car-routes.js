const express = require('express');
const auth = require('../middleware/auth');
const {addCar, getCars, updateCar, deleteCar} = require('../controllers/carController');

const router = express.Router();

router.post('/car',auth, addCar);
router.get('/cars',  getCars);
router.put('/car/:id', auth, updateCar);
router.delete('/car/:id', auth, deleteCar);


module.exports = {
    routes: router
}
