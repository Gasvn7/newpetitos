const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.Controller.js')

router.get('/', mainController.home);
router.get('/menu', mainController.menu);
router.get('/barra', mainController.navigationBar);

module.exports = router;
