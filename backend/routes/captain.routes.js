const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'), 
    body('fullname.firstname').isLength({ min:3}).withMessage
    ('Fisrt name must be at least 3 charcaters long'), 
    body('password').isLength({ min:6}).withMessage
    ('Password must be at least 6 charcaters long'), 
    body('vehicle.color').isLength({ min:3}).withMessage
    ('Vehicle color must be at least 3 charcaters long'), 
    body('vehicle.plate').isLength({ min:3}).withMessage('Vehicle plate must be at least 3 charcaters long'), 
    body('vehicle.capacity').isInt({ min:1}).withMessage('Vehicle capacity must be at least 1'), 
    body('vehicle.vehicleType').isIn(['car', 'motorcycle','auto']).withMessage('Vehicle type must be car , motocyle or auto'),             
],

captainController.registerCaptain

)



module.exports = router ;  