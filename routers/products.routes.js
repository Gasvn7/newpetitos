const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.Controller.js')

router.get('/productos', productController.productos);


module.exports = router;
