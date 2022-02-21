const path = require('path');
const productController = {
    productos: function (req, res) {
        res.sendFile(path.join(__dirname, '../views/productDetail.html'))
    }
}

module.exports = productController;