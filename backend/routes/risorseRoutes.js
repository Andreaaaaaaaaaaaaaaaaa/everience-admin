const express = require('express');
const router = express.Router();
const risorseController = require('../controllers/risorseController');
const authMiddleware = require('../middleware/auth');

//commentato per testare router.get('/', authMiddleware, risorseController.findAll);
/*riga sostitutiva */router.get('/', risorseController.findAll);

module.exports = router;