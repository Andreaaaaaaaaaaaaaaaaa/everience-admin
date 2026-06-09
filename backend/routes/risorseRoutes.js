const express = require('express');
const router = express.Router();
const risorseController = require('../controllers/risorseController');
const authMiddleware = require('../middleware/auth');
//router.get('/', authMiddleware, risorseController.findAll);

module.exports = router;