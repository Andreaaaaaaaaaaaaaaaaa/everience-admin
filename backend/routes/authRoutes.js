const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();


const authController = require('../controllers/authController');

router.post('/login', [
    
    body('email').isEmail().withMessage('Formato email non valido'),
    body('password').notEmpty().withMessage('La password è obbligatoria')
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       
        return res.status(400).json({ 
            success: false, 
            error: {
                code: 'VALIDATION_ERROR',
                message: 'Campi di input non validi.', 
                details: errors.array() 
            }
        });
    }
    next(); 
}, authController.login); 

module.exports = router;